import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye } from "react-icons/hi";
import { konsultasiData } from "../../../models/dashboard/konsultasiModel";

function RiwayatKonseling() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(konsultasiData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = konsultasiData.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    switch (status) {
      case "Disetujui":
        return "bg-green-100 text-green-700";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700";
      case "Selesai":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">Riwayat Konseling</h2>
      <p className="text-gray-600 mb-6">Daftar riwayat konseling anda</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-700">
              <th className="p-3">No</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Guru BK</th>
              <th className="p-3">Jenis Sesi</th>
              <th className="p-3">Topik</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{startIndex + index + 1}</td>
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.guru_bk}</td>
                <td className="p-3">{item.jenis_sesi}</td>
                <td className="p-3">{item.topik}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <Link to={`/dashboard/konsultasi/${item.id}`}>
                    <HiOutlineEye className="text-gray-600 hover:text-red-600 cursor-pointer text-lg" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded-md ${
            currentPage === 1
              ? "text-gray-400 border-gray-200"
              : "hover:bg-gray-100"
          }`}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-red-700 text-white"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded-md ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-200"
              : "hover:bg-gray-100"
          }`}
        >
          ›
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-3 text-center">
        Menampilkan {startIndex + 1} - {Math.min(endIndex, konsultasiData.length)} dari{" "}
        {konsultasiData.length} data
      </p>
    </div>
  );
}

export default RiwayatKonseling;
