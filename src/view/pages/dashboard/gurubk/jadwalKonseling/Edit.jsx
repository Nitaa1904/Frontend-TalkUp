import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import FormEditBalasan from "../../../../components/layout/konsultasi/gurubk/FormEditBalasan";
import DetailJadwalKonseling from "../../../../components/layout/konsultasi/gurubk/DetailJadwal";
import CatatanKonselingForm from "../../../../components/layout/konsultasi/gurubk/FormCatatan";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function EditJadwal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catatan, setCatatan] = useState({
    catatan_guru_bk: "",
    catatan_siswa: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const formatTanggal = (tanggal) => {
    if (!tanggal || tanggal === "-") return "-";

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
        jenisSesi:
          item.detail_konseling?.jenis_sesi_final ||
          item.jenis_sesi_pengajuan ||
          "-",
        topikKonseling: item.topik_konseling || "-",
        tanggalPengajuan: formatTanggal(item.tgl_pengajuan),
        tanggalKonseling: formatTanggal(item.detail_konseling?.tgl_konseling),
        waktu:
          item.detail_konseling?.waktu_mulai &&
          item.detail_konseling?.waktu_selesai
            ? `${item.detail_konseling.waktu_mulai} - ${item.detail_konseling.waktu_selesai}`
            : "-",
        linkGoogleMeet: item.detail_konseling?.link_sesi || "-",
        deskripsi: item.deskripsi_masalah || "-",
        deskripsiJadwal: item.detail_konseling?.deskripsi_jadwal || "-",
        catatanGuruBK: item.detail_konseling?.catatan_guru_bk || "",
        catatanSiswa: item.detail_konseling?.catatan_siswa || "",
        status: item.status || "Menunggu",
      };

      setData(transformedData);

      if (item.detail_konseling) {
        setCatatan({
          catatan_guru_bk: item.detail_konseling.catatan_guru_bk || "",
          catatan_siswa: item.detail_konseling.catatan_siswa || "",
        });
      }
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

  const handleCatatanChange = (field, value) => {
    setCatatan((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const payload = {
        catatan_guru_bk: catatan.catatan_guru_bk,
        catatan_siswa: catatan.catatan_siswa,
      };

      await axios.put(`${API_URL}/konseling/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      alert("Data berhasil diupdate");
      navigate("/dashboard/jadwalkonseling");
    } catch (err) {
      console.error("Error updating data:", err);
      alert(err.response?.data?.message || "Gagal mengupdate data");
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/jadwalkonseling");
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
        <h1 className="text-xl font-medium">Edit Konseling</h1>
        <h3 className="text-base">
          Permintaan konselingmu sedang di proses. Mohon tunggu balasan dari
          guru BK melalui email atau halaman ini
        </h3>
      </div>

      <DetailJadwalKonseling data={data} />

      <form onSubmit={handleSubmit} className="space-y-8">
        <CatatanKonselingForm
          catatanSiswa={catatan.catatan_siswa}
          catatanGuruBK={catatan.catatan_guru_bk}
          onCatatanSiswaChange={(value) =>
            handleCatatanChange("catatan_siswa", value)
          }
          onCatatanGuruBKChange={(value) =>
            handleCatatanChange("catatan_guru_bk", value)
          }
          readOnly={false}
        />

        <div className="flex flex-row gap-4">
          <Button
            color="secondary"
            size="md"
            type="button"
            onClick={handleCancel}
          >
            Batal
          </Button>
          <Button color="primary" size="md" type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
