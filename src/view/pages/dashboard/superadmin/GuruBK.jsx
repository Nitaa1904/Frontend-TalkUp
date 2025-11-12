import React from "react";
import { guruBKData } from "../../../../models/dashboard/superadmin/gurubk";

const DaftarGuruBK = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Daftar Guru BK</h1>
      <p className="text-gray-600 mb-6">Daftar Guru BK SMA N 1 Purwokerto</p>

      <button className="text-red-700 font-medium mb-6 hover:text-red-800">
        + Tambah guru bk
      </button>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Tabel Daftar Guru BK</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Tampilkan:</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>5 Data</option>
              <option>10 Data</option>
              <option>20 Data</option>
            </select>
            <span className="text-sm text-gray-600">Dari {guruBKData.length} Data</span>
          </div>
        </div>

        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">No</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Jabatan</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {guruBKData.map((guru, index) => (
              <tr key={guru.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{index + 1}</td>
                <td className="px-6 py-4 text-sm">{guru.nama}</td>
                <td className="px-6 py-4 text-sm">{guru.role}</td>
                <td className="px-6 py-4 text-sm">{guru.jabatan}</td>
                <td className="px-6 py-4 text-sm">{guru.email}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    {/* Edit Button */}
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    {/* View Button */}
                    <button className="text-green-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Delete Button */}
                    <button className="text-red-500 hover:text-red-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              &lt;
            </button>
            <button className="px-3 py-1 bg-red-700 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">3</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">4</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarGuruBK;