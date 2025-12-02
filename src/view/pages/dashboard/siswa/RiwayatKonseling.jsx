import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomTable from "../../../../theme/Table";
import { createTableActions } from "../../../../utils/tableActions";
import StatusBadge from "../../../../theme/StatusBadge";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const RiwayatKonseling = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/konseling/riwayat/siswa`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.data && response.data.data.length > 0) {
        const transformedData = response.data.data.map((item) => {
          const detail = item.detail_konseling || {};

          const jenisSesi =
            detail.jenis_sesi_final ||
            item.jenis_sesi_pengajuan ||
            item.jenis_sesi ||
            "-";

          return {
            id: item.id_konseling,
            guru_bk: item.guru_bk?.nama || "-",
            jenis_sesi: jenisSesi,
            topik: item.topik_konseling || "-",
            status: item.status || "Selesai",
          };
        });

        setData(transformedData);
      } else {
        setData([]);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } else {
        setData([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { header: "Guru BK", key: "guru_bk" },
    { header: "Jenis Sesi", key: "jenis_sesi" },
    { header: "Topik", key: "topik" },
    {
      header: "Status",
      key: "status",
      render: (value) => <StatusBadge status={value} showIcon={false} />,
    },
  ];

  const actions = createTableActions({
    onView: (row) => {
      navigate(`/dashboard/konsultasi/${row.id}`);
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700"></div>
          <p className="text-gray-500 text-sm">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CustomTable
        title="Riwayat Konseling"
        subtitle="Daftar riwayat konseling anda"
        columns={columns}
        data={data}
        actions={actions}
        itemsPerPageOptions={[5, 10, 20]}
        defaultItemsPerPage={5}
        showAddButton={false}
        emptyMessage="Belum ada riwayat konseling"
      />
    </div>
  );
};

export default RiwayatKonseling;
