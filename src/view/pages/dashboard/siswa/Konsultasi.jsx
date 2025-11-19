import React, { useState } from "react";
import { Button, TextInput, Textarea, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Konsultasi = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    kelas: "XI TKJ 4",
    guruBk: "Bu Rina Astuti, S.Pd.",
    guruBkTambahan: "",
    jenisSesi: "Online",
    topik: "Karir",
    deskripsi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Konseling berhasil diajukan!");
    navigate("/dashboard/riwayat");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Konsultasi</h1>
      <p className="text-gray-600 mb-8">
        Isi formulir di bawah untuk mengajukan permintaan konseling dengan guru BK
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
              <TextInput
                id="guruBk"
                name="guruBk"
                color="primary"
                type="text"
                value={formData.guruBk}
                readOnly
                disabled
              />
            </div>

            <div className="w-full">
              <label htmlFor="guruBkTambahan" className="block mb-2 font-medium">
                Guru BK Tambahan <span className="text-gray-400 font-normal">- optional</span>
              </label>
              <Select
                id="guruBkTambahan"
                name="guruBkTambahan"
                color="primary"
                value={formData.guruBkTambahan}
                onChange={handleChange}
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
              />
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Button
              color="primary" 
              size="md" 
              type="submit"
            >
              Ajukan Konseling
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Konsultasi;