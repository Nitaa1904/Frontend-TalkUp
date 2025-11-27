import React, { useState, useEffect } from "react";
import { Button, TextInput, Textarea, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

const Konsultasi = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [guruBKList, setGuruBKList] = useState([]);
  const [loadingGuru, setLoadingGuru] = useState(true);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    kelas: "XI TKJ 4",
    guruBk: "",
    guruBkTambahan: "",
    jenisSesi: "Online",
    topik: "Karir",
    deskripsi: "",
    id_guru_bk: "",
  });

  useEffect(() => {
    fetchGuruBK();
  }, []);

  const fetchGuruBK = async () => {
    try {
      setLoadingGuru(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/guru-bk/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Guru BK List:", response.data);
      setGuruBKList(response.data.data || []);
    } catch (err) {
      console.error("Error fetching guru BK:", err);
      setGuruBKList([]);
    } finally {
      setLoadingGuru(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const payload = {
        jenis_sesi: formData.jenisSesi,
        topik_konseling: formData.topik,
        deskripsi_masalah: formData.deskripsi,
      };

      if (formData.id_guru_bk) {
        payload.id_guru_bk = parseInt(formData.id_guru_bk);
      }

      console.log("Payload:", payload);

      const response = await axios.post(`${API_URL}/konseling/`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response sukses:", response.data);
      alert("Konseling berhasil diajukan!");
      navigate("/dashboard/riwayat");
    } catch (err) {
      console.error("Error:", err.response?.data);

      if (err.response?.status === 401) {
        alert("Sesi login Anda telah berakhir. Silakan login kembali.");
        localStorage.clear();
        navigate("/login");
      } else {
        alert(
          err.response?.data?.message ||
            "Gagal mengajukan konseling. Silakan coba lagi."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Konsultasi</h1>
      <p className="text-gray-600 mb-8">
        Isi formulir di bawah untuk mengajukan permintaan konseling dengan guru
        BK
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
        <p className="text-blue-700 font-medium">Informasi Penting</p>
        <p className="text-blue-600 text-sm">
          Jangan lupa untuk cek email dan balasan dari ajuan konseling anda
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <label htmlFor="nama" className="block mb-2 font-medium">
                Nama
              </label>
              <TextInput
                id="nama"
                name="nama"
                color="primary"
                type="text"
                placeholder="example"
                value={formData.nama}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <TextInput
                id="email"
                name="email"
                color="primary"
                type="email"
                placeholder="example@telkomstudent-pwt.ac.id"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="w-full">
              <label htmlFor="kelas" className="block mb-2 font-medium">
                Kelas
              </label>
              <TextInput
                id="kelas"
                name="kelas"
                color="primary"
                type="text"
                value={formData.kelas}
                readOnly
                disabled
              />
            </div>

            <div className="w-full">
              <label htmlFor="guruBk" className="block mb-2 font-medium">
                Guru BK
              </label>
              <Select
                id="id_guru_bk"
                name="id_guru_bk"
                color="primary"
                value={formData.id_guru_bk}
                onChange={handleChange}
                disabled={loading || loadingGuru}
              >
                <option value="">Otomatis ditentukan sistem</option>
                {guruBKList.map((guru) => (
                  <option key={guru.id_guru_bk} value={guru.id_guru_bk}>
                    {guru.nama}
                  </option>
                ))}
              </Select>
            </div>

            <div className="w-full">
              <label
                htmlFor="guruBkTambahan"
                className="block mb-2 font-medium"
              >
                Guru BK Tambahan{" "}
                <span className="text-gray-400 font-normal">- optional</span>
              </label>
              <Select
                id="guruBkTambahan"
                name="guruBkTambahan"
                color="primary"
                value={formData.guruBkTambahan}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Pilih Guru BK Tambahan</option>
                <option value="Ibu Sri">Ibu Sri</option>
                <option value="Pak Budi">Pak Budi</option>
                <option value="Bu Ani">Bu Ani</option>
                <option value="Pak Joko">Pak Joko</option>
              </Select>
            </div>

            <div className="w-full">
              <label htmlFor="topik" className="block mb-2 font-medium">
                Topik Konseling
              </label>
              <Select
                id="topik"
                name="topik"
                color="primary"
                value={formData.topik}
                onChange={handleChange}
                required
                disabled={loading}
              >
                <option value="Pribadi">Pribadi</option>
                <option value="Sosial">Sosial</option>
                <option value="Belajar">Belajar</option>
                <option value="Karir">Karir</option>
              </Select>
            </div>

            <div className="w-full">
              <label htmlFor="jenisSesi" className="block mb-2 font-medium">
                Jenis Sesi Konseling
              </label>
              <Select
                id="jenisSesi"
                name="jenisSesi"
                color="primary"
                value={formData.jenisSesi}
                onChange={handleChange}
                required
                disabled={loading}
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Select>
            </div>

            <div className="w-full md:col-span-2">
              <label htmlFor="deskripsi" className="block mb-2 font-medium">
                Deskripsi
              </label>
              <Textarea
                id="deskripsi"
                name="deskripsi"
                color="primary"
                placeholder="Ceritakan secara singkat"
                value={formData.deskripsi}
                onChange={handleChange}
                rows={4}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Button
              color="primary"
              size="md"
              type="submit"
              disabled={loading || loadingGuru}
            >
              {loading ? "Mengajukan..." : "Ajukan Konseling"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Konsultasi;
