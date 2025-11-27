import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../../../../view/components/layout/Breadcrumb";
import DetailPermintaanKonseling from "../../../../components/layout/konsultasi/gurubk/DetailPermintaan";
import FormBalasanKonseling from "../../../../components/layout/konsultasi/gurubk/FormBalasan";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get(`${API_URL}/konseling/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);
      const item = response.data.data;
      const transformedData = {
        id: item.id_konseling,
        nama: item.siswa?.nama || "-",
        kelas: item.siswa?.kelas || "-",
        guruBK: item.guru_bk?.nama || "-",
        jenisSesi: item.jenis_sesi_pengajuan || "-",
        topikKonseling: item.topik_konseling || "-",
        tanggal: item.tgl_pengajuan || "-",
        deskripsi: item.deskripsi_masalah || "-",
        status: item.status || "Menunggu",
      };

      setData(transformedData);
    } catch (err) {
      console.error("Error fetching data:", err);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(`${API_URL}/konseling/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      alert("Balasan berhasil dikirim");
      if (formData.status === "Disetujui") {
        navigate("/dashboard/jadwalKonseling");
      } else {
        navigate("/dashboard/permintaanKonseling");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert(err.response?.data?.message || "Gagal mengirim balasan");
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/permintaanKonseling");
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

  if (!data) {
    return <p className="p-6 text-red-500">Data tidak ditemukan.</p>;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <Breadcrumb />

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <h3 className="text-base">
          Permintaan konselingmu sedang diproses. Mohon tunggu balasan dari guru
          BK melalui email atau halaman ini
        </h3>
      </div>

      <DetailPermintaanKonseling data={data} />

      <FormBalasanKonseling onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}
