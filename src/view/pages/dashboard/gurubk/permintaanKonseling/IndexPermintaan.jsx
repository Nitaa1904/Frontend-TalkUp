import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import axios from "axios";

export default function Index() {
  const [historyPengajuan, setHistoryPengajuan] = useState([]);
  const [currentHistoryPage, setCurrentHistoryPage] = useState(1);
  const itemsPerPage = 5;
  const totalHistoryPages = Math.ceil(historyPengajuan.length / itemsPerPage);

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";
    const date = new Date(tanggal);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

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

      setHistoryPengajuan(data.pengajuan_menunggu || []);
    } catch (error) {
      console.error("Gagal mengambil data :", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const startHistoryIndex = (currentHistoryPage - 1) * itemsPerPage;
  const endHistoryIndex = startHistoryIndex + itemsPerPage;
  const currentHistoryData = historyPengajuan.slice(
    startHistoryIndex,
    endHistoryIndex
  );

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

  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-medium">Permintaan Konseling</h1>
          <h3 className="text-base ">Daftar Konseling Siswa-Siswi</h3>
        </div>
        <div className="overflow-x-auto p-4 border border-gray-300 rounded-xl">
          <div className="w-full flex justify-between items-center pb-4">
            <h1 className="font-semibold">Riwayat Pengajuan Terbaru</h1>
            <p className="text-sm text-gray-500 text-center">
              Menampilkan {startHistoryIndex + 1} -{" "}
              {Math.min(endHistoryIndex, historyPengajuan.length)} dari{" "}
              {historyPengajuan.length} data
            </p>{" "}
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
                  key={item.id || index}
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
                  <td className="p-3 text-center flex justify-center gap-3 text-green-500 hover:text-green-600">
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
              className={`px-3 py-1 border rounded-md ${
                currentHistoryPage === 1
                  ? "text-gray-400 border-gray-200"
                  : "hover:bg-gray-100"
              }`}
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
                    : "border border-gray-300 hover:bg-gray-100"
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
              className={`px-3 py-1 border rounded-md ${
                currentHistoryPage === totalHistoryPages
                  ? "text-gray-400 border-gray-200"
                  : "hover:bg-gray-100"
              }`}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <RiwayatPengajuanTable />
    </div>
  );
}