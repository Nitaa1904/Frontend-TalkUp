import { useState } from "react";

function Konsultasi() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    kelas: "XI TKJ 4",
    guruBk: "Bu Rina Astuti, S.Pd.",
    jenisSesi: "Online",
    topik: "Karir",
    deskripsi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Konseling berhasil diajukan!");
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">Konsultasi</h2>
      <p className="text-gray-600 mb-6">
        Isi formulir di bawah untuk mengajukan permintaan konseling dengan guru
        BK
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
        <p className="text-blue-700 font-medium">Informasi Penting</p>
        <p className="text-blue-600 text-sm">
          Jangan lupa untuk cek email dan balasan dari ajuan konseling anda
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">Nama</label>
          <input
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="example"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@telkomstudent-pwt.ac.id"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Kelas</label>
          <input
            value={formData.kelas}
            disabled
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Guru BK</label>
          <input
            value={formData.guruBk}
            disabled
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Jenis Sesi Konseling</label>
          <select
            name="jenisSesi"
            value={formData.jenisSesi}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Topik Konseling</label>
          <select
            name="topik"
            value={formData.topik}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="Pribadi">Pribadi</option>
            <option value="Sosial">Sosial</option>
            <option value="Belajar">Belajar</option>
            <option value="Karir">Karir</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-gray-700 mb-1">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            placeholder="Ceritakan secara singkat"
            className="w-full border rounded-md p-2 h-24"
          ></textarea>
        </div>

        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800"
          >
            Ajukan Konseling
          </button>
        </div>
      </form>
    </div>
  );
}

export default Konsultasi;
