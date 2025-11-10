import { useParams } from "react-router-dom";
import { konsultasiData } from "../../../models/dashboard/konsultasiModel";
import { HiOutlineUser, HiOutlineChatAlt2, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import { Badge } from "flowbite-react";

function KonsultasiDetail() {
  const { id } = useParams();
  const data = konsultasiData.find((item) => item.id === parseInt(id));

  if (!data) {
    return <div className="p-6 text-gray-500">Data tidak ditemukan.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-sm text-gray-500 mb-1">Riwayat Konseling / Detail</h2>
      <h1 className="text-2xl font-semibold mb-2">Status Pengajuan Konseling</h1>
      <p className="text-gray-600 mb-8">
        Permintaan konselingmu sedang diproses. Mohon tunggu balasan dari guru BK melalui email atau halaman ini.
      </p>

      <div className="bg-white shadow-sm rounded-xl border p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">Detail Pengajuan</h3>
          <Badge color={data.status === "Menunggu" ? "warning" : "success"} icon={HiOutlineClock}>
            {data.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
          <div>
            <p className="font-medium">Nama</p>
            <p className="text-gray-600">{data.nama}</p>
          </div>
          <div>
            <p className="font-medium">Kelas</p>
            <p className="text-gray-600">{data.kelas}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <HiOutlineUser className="text-gray-500" />
              <p className="font-medium">Guru BK</p>
            </div>
            <p className="ml-6 text-gray-600">{data.guru_bk}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <HiOutlineChatAlt2 className="text-gray-500" />
              <p className="font-medium">Jenis Sesi</p>
            </div>
            <p className="ml-6 text-gray-600">{data.jenis_sesi}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <HiOutlineChatAlt2 className="text-gray-500" />
              <p className="font-medium">Topik Konseling</p>
            </div>
            <p className="ml-6 text-gray-600">{data.topik}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <HiOutlineCalendar className="text-gray-500" />
              <p className="font-medium">Tanggal Pengajuan</p>
            </div>
            <p className="ml-6 text-gray-600">{data.tanggal}</p>
          </div>

          <div className="md:col-span-2">
            <p className="font-medium mb-1 flex items-center gap-2">
              <HiOutlineChatAlt2 className="text-gray-500" /> Deskripsi
            </p>
            <p className="text-gray-600 ml-6">{data.deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KonsultasiDetail;
