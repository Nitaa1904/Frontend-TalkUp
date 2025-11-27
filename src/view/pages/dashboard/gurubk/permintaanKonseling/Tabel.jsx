import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomTable from "../../../../../theme/Table";
import { createTableActions } from "../../../../../utils/tableActions";
import StatusBadge from "../../../../../theme/StatusBadge";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function RiwayatPengajuanTable() {
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
      const idGuruBK = localStorage.getItem("id_guru_bk") || 1;

      const response = await axios.get(
        `${API_URL}/konseling/guru/${idGuruBK}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);
      const transformedData = response.data.data.map((item) => ({
        id: item.id,
        tanggal: item.tgl_pengajuan,
        namaSiswa: item.siswa?.nama_lengkap || "-",
        jenisKonseling: item.jenis_sesi || "-",
        topikKonseling: item.topik_konseling || "-",
        status: item.status || "Menunggu",
        kelas: item.siswa?.kelas || "-",
        deskripsiMasalah: item.deskripsi_masalah || "-",
      }));

      setData(transformedData);
    } catch (err) {
      console.error("Error fetching data:", err);
      if (err.response?.status === 404) {
        setData([]);
      } else if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
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

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";

    const date = new Date(tanggal);

    if (isNaN(date.getTime())) {
      return tanggal;
    }

    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const columns = [
    {
      header: "Tanggal",
      key: "tanggal",
      render: (value) => formatTanggal(value),
    },
    { header: "Nama Siswa", key: "namaSiswa" },
    { header: "Jenis Konseling", key: "jenisKonseling" },
    {
      header: "Status",
      key: "status",
      render: (value) => <StatusBadge status={value} showIcon={false} />,
    },
  ];

  const actions = createTableActions({
    onView: (row) => {
      navigate(`/dashboard/permintaanKonseling/${row.id}`);
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
    <CustomTable
      title="Riwayat Pengajuan Terbaru"
      columns={columns}
      data={data}
      actions={actions}
      itemsPerPageOptions={[5, 10, 20]}
      defaultItemsPerPage={5}
      showAddButton={false}
      emptyMessage="Tidak ada riwayat pengajuan yang ditemukan"
    />
  );
}
