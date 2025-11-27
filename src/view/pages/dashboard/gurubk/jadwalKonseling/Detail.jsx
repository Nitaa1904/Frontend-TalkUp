import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import DetailJadwalKonseling from "../../../../components/layout/konsultasi/gurubk/DetailJadwal";
import CatatanKonselingForm from "../../../../components/layout/konsultasi/gurubk/FormCatatan";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function DetailJadwal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCatatanForm, setShowCatatanForm] = useState(false);
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

      if (item.status === "Selesai") {
        setShowCatatanForm(true);
      }

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

  const handleSelesaiClick = () => {
    setShowCatatanForm(true);
  };

  const handleSubmitCatatan = async () => {
    try {
      const token = localStorage.getItem("token");

      const payload = {
        hasil_konseling: catatan.catatan_siswa || "Konseling selesai",
        catatan_guru_bk: catatan.catatan_guru_bk,
        catatan_siswa: catatan.catatan_siswa,
      };

      const response = await axios.put(
        `${API_URL}/konseling/${id}/selesai`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success response:", response.data);
      alert("Sesi konseling berhasil diselesaikan");
      navigate("/dashboard/jadwalkonseling");
    } catch (err) {
      console.error("Error saving catatan:", err);
      console.error("Error response:", err.response?.data);
      alert(
        err.response?.data?.message || "Gagal menyelesaikan sesi konseling"
      );
    }
  };

  const handleBatal = () => {
    setShowCatatanForm(false);
    setCatatan({
      catatan_guru_bk: data?.catatanGuruBK || "",
      catatan_siswa: data?.catatanSiswa || "",
    });
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

  const isSelesai = data.status === "Selesai";
  const isDisetujui = data.status === "Disetujui";

  return (
    <div className="w-full flex flex-col gap-8">
      <Breadcrumb />

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Konseling</h1>
        <h3 className="text-base">
          Permintaan konselingmu sedang di proses. Mohon tunggu balasan dari
          guru BK melalui email atau halaman ini
        </h3>
      </div>

      <DetailJadwalKonseling data={data} />

      {showCatatanForm && (
        <CatatanKonselingForm
          catatanSiswa={catatan.catatan_siswa}
          catatanGuruBK={catatan.catatan_guru_bk}
          onCatatanSiswaChange={(value) =>
            handleCatatanChange("catatan_siswa", value)
          }
          onCatatanGuruBKChange={(value) =>
            handleCatatanChange("catatan_guru_bk", value)
          }
          readOnly={isSelesai}
        />
      )}

      <div className="flex flex-row gap-4">
        {showCatatanForm && !isSelesai && (
          <>
            <Button
              color="primary"
              size="md"
              onClick={handleSubmitCatatan}
              className="mt-4"
            >
              Simpan Catatan
            </Button>
            <Button
              color="secondary"
              size="md"
              onClick={handleBatal}
              className="mt-4"
            >
              Batal
            </Button>
          </>
        )}

        {isDisetujui && !showCatatanForm && (
          <Button
            color="primary"
            size="md"
            onClick={handleSelesaiClick}
            className="mt-4"
          >
            Selesai
          </Button>
        )}

        {(!showCatatanForm || isSelesai) && (
          <Button
            color="secondary"
            size="md"
            onClick={() => navigate("/dashboard/jadwalkonseling")}
            className="mt-4"
          >
            Kembali
          </Button>
        )}
      </div>
    </div>
  );
}
