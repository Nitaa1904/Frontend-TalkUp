import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function Guru_BK() {
  const [jadwalKonseling, setJadwalKonseling] = useState([]);
  const [historyPengajuan, setHistoryPengajuan] = useState([]);

  const [currentKonselingPage, setCurrentKonselingPage] = useState(1);
  const [currentHistoryPage, setCurrentHistoryPage] = useState(1);

  const itemsPerPage = 5;
  const fetchDashboard = async () => {

    try {
      const response = await axios.get(
        "http://40.117.43.104/api/v1/dashboard/guru",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = response.data.data;

      setJadwalKonseling(data.jadwal_mendatang || []);
      setHistoryPengajuan(data.pengajuan_menunggu || []);
    } catch (error) {
      console.error("Gagal mengambil data dashboard:", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";
    const date = new Date(tanggal);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-500";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-500";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const startKonselingIndex = (currentKonselingPage - 1) * itemsPerPage;
  const startHistoryIndex = (currentHistoryPage - 1) * itemsPerPage;

  const currentKonselingData = jadwalKonseling.slice(
    startKonselingIndex,
    startKonselingIndex + itemsPerPage
  );

  const currentHistoryData = historyPengajuan.slice(
    startHistoryIndex,
    startHistoryIndex + itemsPerPage
  );

  const totalKonselingPages = Math.ceil(jadwalKonseling.length / itemsPerPage);
  const totalHistoryPages = Math.ceil(historyPengajuan.length / itemsPerPage);
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-medium">Dashboard</h1>
          <h3 className="text-base ">Daftar Konseling Siswa-Siswi</h3>
        </div>
        <div className="overflow-x-auto p-4 border border-gray-300 rounded-xl">
          <div className="w-full flex justify-between items-center pb-4">
            <h1 className="font-semibold">Jadwal Konseling Mendatang</h1>
            <p className="text-sm text-gray-500 text-center">
              Menampilkan {startKonselingIndex + 1} -{" "}
              {Math.min(
                startKonselingIndex + itemsPerPage,
                jadwalKonseling.length
              )}{" "}
              dari {jadwalKonseling.length} data
            </p>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-b-gray-300 text-sm text-gray-700">
                <th className="p-3">No</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Nama Siswa</th>
                <th className="p-3">Jenis Sesi</th>
                <th className="p-3">Jenis Konseling</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {currentKonselingData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-b-gray-300 hover:bg-gray-50 text-sm"
                >
                  <td className="p-3">{startKonselingIndex + index + 1}</td>
                  <td className="p-3">{formatTanggal(item.tgl_konseling) || "-"}</td>
                  <td className="p-3">{item.siswa?.nama_lengkap || "-"}</td>
                  <td className="p-3">{item.detail_konseling?.jenis_sesi_final || "-"}</td>
                  <td className="p-3">{item.topik_konseling || "-"}</td>

                  <td className="p-3 text-center flex justify-center gap-3">
                    <Link
                      to={`/dashboard/editkonseling/${item.id}`}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <EditOutlined className=" cursor-pointer text-lg" />
                    </Link>
                    <Link
                      to={`/dashboard/konseling/${item.id}`}
                      className="text-red-500 hover:text-red-600"
                    >
                      <DeleteOutlined className=" cursor-pointer text-lg" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-x-2 mt-6 flex justify-end">
            <button
              onClick={() => setCurrentKonselingPage((p) => Math.max(p - 1, 1))}
              disabled={currentKonselingPage === 1}
              className="px-3 py-1 border rounded-md"
            >
              ‹
            </button>

            {Array.from({ length: totalKonselingPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentKonselingPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentKonselingPage === i + 1
                    ? "bg-red-700 text-white"
                    : "border border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentKonselingPage((p) =>
                  Math.min(p + 1, totalKonselingPages)
                )
              }
              disabled={currentKonselingPage === totalKonselingPages}
              className="px-3 py-1 border rounded-md"
            >
              ›
            </button>
          </div>
        </div>

        <div className="overflow-x-auto p-4 border border-gray-300 rounded-xl">
          <div className="w-full flex justify-between items-center pb-4">
            <h1 className="font-semibold">Riwayat Pengajuan Terbaru</h1>
            <p className="text-sm text-gray-500 text-center">
              Menampilkan {startHistoryIndex + 1} -{" "}
              {Math.min(
                startHistoryIndex + itemsPerPage,
                historyPengajuan.length
              )}{" "}
              dari {historyPengajuan.length} data
            </p>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-b-gray-300 text-sm text-gray-700">
                <th className="p-3">No</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Nama Siswa</th>
                <th className="p-3">Jenis Konseling</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {currentHistoryData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-b-gray-300 hover:bg-gray-50 text-sm"
                >
                  <td className="p-3">{startHistoryIndex + index + 1}</td>
                  <td className="p-3">{formatTanggal(item.tgl_pengajuan)}</td>
                  <td className="p-3">{item.siswa?.nama_lengkap}</td>
                  <td className="p-3">{item.topik_konseling}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3 text-center flex justify-center text-green-500 hover:text-green-600">
                    <Link to={`/dashboard/permintaanKonseling/${item.id}`}>
                      <EyeOutlined className=" cursor-pointer text-lg" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-x-2 mt-6 flex justify-end">
            <button
              onClick={() => setCurrentHistoryPage((p) => Math.max(p - 1, 1))}
              disabled={currentHistoryPage === 1}
              className="px-3 py-1 border rounded-md"
            >
              ‹
            </button>

            {Array.from({ length: totalHistoryPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHistoryPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentHistoryPage === i + 1
                    ? "bg-red-700 text-white"
                    : "border border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentHistoryPage((p) => Math.min(p + 1, totalHistoryPages))
              }
              disabled={currentHistoryPage === totalHistoryPages}
              className="px-3 py-1 border rounded-md"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <JadwalKonselingTable />
      <RiwayatPengajuanTable />
    </div>
  );
}