import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import DetailPengajuan from "../../../components/layout/konsultasi/siswa/DetailPengajuan";
import DetailKonseling from "../../../components/layout/konsultasi/siswa/DetailKonseling";
import CatatanKonseling from "../../../components/layout/konsultasi/siswa/CatatanKonseling";
import { Button } from "flowbite-react";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const KonsultasiDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get(`${API_URL}/konseling/riwayat/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);

      const item = response.data.data;
      const transformedData = {
        id: item.id_konseling,
        nama: item.siswa?.nama_lengkap || "-",
        email: item.siswa?.email || "-",
        kelas: item.siswa?.kelas || "-",
        guru_bk: item.guru_bk?.nama || "-",
        jenis_sesi: item.jenis_sesi || "-",
        topik: item.topik_konseling || "-",
        deskripsi: item.deskripsi_masalah || "-",
        status: item.status || "Pending",
        tanggal_pengajuan: item.tgl_pengajuan || "-",
        tanggal_konseling: item.tgl_konseling || "-",
        tanggal_selesai: item.tgl_selesai || "-",
        hasil_konseling: item.hasil_konseling || "-",
        catatan_siswa: item.catatan_siswa || "-",
        catatan_guru_bk: item.catatan_guru_bk || "-",
      };

      setData(transformedData);
    } catch (err) {
      console.error("Error fetching data:", err);
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.clear();
        navigate("/login");
      } else if (err.response?.status === 404) {
        setData(null);
      } else {
        alert("Gagal memuat data detail konseling");
      }
    } finally {
      setLoading(false);
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

  if (!data) {
    return (
      <div className="p-6">
        <Breadcrumb />
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <p className="text-gray-500">Data tidak ditemukan.</p>
          <Button
            as={Link}
            to="/dashboard/riwayat"
            color="primary"
            size="md"
            className="mt-4"
          >
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Breadcrumb />

      <h1 className="text-2xl font-semibold mb-2">
        Status Pengajuan Konseling
      </h1>
      <p className="text-gray-600 mb-8">
        Permintaan konselingmu sedang diproses. Mohon tunggu balasan dari guru
        BK melalui email atau halaman ini.
      </p>

      <DetailPengajuan data={data} />

      {(data.status === "Disetujui" || data.status === "Selesai") && (
        <DetailKonseling data={data} />
      )}

      {data.status === "Selesai" && <CatatanKonseling data={data} />}

      <Button
        as={Link}
        to="/dashboard/riwayat"
        color="primary"
        size="md"
        className="mt-4"
      >
        Kembali
      </Button>
    </div>
  );
};

export default KonsultasiDetail;
