import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomTable from "../../../../../theme/Table";
import { createTableActions } from "../../../../../utils/tableActions";
import DeleteConfirmModal from "../../../../components/modals/DeleteConfirmModal";
import StatusBadge from "../../../../../theme/StatusBadge";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function JadwalKonselingTable() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get(`${API_URL}/konseling/jadwal`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);
      const transformedData = response.data.data.map((item) => ({
        id: item.id,
        tanggal: item.detail_konseling?.tgl_sesi || "-",
        waktu: item.detail_konseling?.jam_sesi || "-",
        namaSiswa: item.siswa?.nama_lengkap || "-",
        kelas: item.siswa?.kelas || "-",
        jenisKonseling: item.topik_konseling || "-",
        jenisSesi: item.jenis_sesi || "-",
        status: item.status || "Menunggu",
        lokasi: item.detail_konseling?.link_atau_ruang || "-",
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
    {
      header: "Waktu",
      key: "waktu",
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
      navigate(`/dashboard/jadwalKonseling/detail/${row.id}`);
    },
    onEdit: (row) => {
      navigate(`/dashboard/jadwalKonseling/edit/${row.id}`);
    },
    onDelete: (row) => {
      setDeleteId(row.id);
      setOpenModal(true);
    },
  });

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/konseling/jadwal/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      alert("Riwayat konseling berhasil dihapus");
      fetchData();
    } catch (err) {
      console.error("Error deleting:", err);
      alert(err.response?.data?.message || "Gagal menghapus riwayat konseling");
    } finally {
      setOpenModal(false);
    }
  };

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
    <>
      <CustomTable
        title="Daftar Konseling"
        columns={columns}
        data={data}
        actions={actions}
        itemsPerPageOptions={[5, 10, 20]}
        defaultItemsPerPage={5}
        showAddButton={false}
        emptyMessage="Tidak ada jadwal konseling yang ditemukan"
      />

      <DeleteConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
