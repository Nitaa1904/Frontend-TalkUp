import React from "react";

import { useParams, Link } from "react-router-dom";
import { historyPengajuan } from "../../../../../models/dashboard/siswa/historyPengajuan";
import {
  UserOutlined,
  MessageOutlined,
  CommentOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { TextInput, Button, Select } from "flowbite-react";

export default function Detail() {
  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";
    const [day, month, year] = tanggal.split("-");
    const date = new Date(`${year}-${month}-${day}`);
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

  const { id } = useParams();
  const data = historyPengajuan.find((item) => item.id === Number(id));

  if (!data) {
    return <p className="p-6 text-red-500">Data tidak ditemukan.</p>;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <p className="flex flex-row gap-2">
        <Link
          to="/dashboard/permintaanKonseling"
          className="text-gray-400  mb-4 block"
        >
          Permintaan konseling
        </Link>
        <span className="text-gray-400"> / </span> Detail
      </p>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <h3 className="text-base ">Daftar Konseling Siswa-Siswi</h3>
      </div>

      <div className="p-4 border border-gray-300 rounded-lg">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-base font-semibold mb-6">
            Detail Permintaan Konseling
          </h1>
          <span
            className={`h-fit px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              data.status
            )}`}
          >
            {data.status}
          </span>
        </div>
        <div className="space-y-8 text-gray-700">
          <div className="flex flex-row w-full">
            <div className="w-full">
              <h5 className="text-base">Nama</h5>
              <p className="text-base font-medium">{data.namaSiswa}</p>
            </div>
            <div className="w-full">
              <h5 className="text-base">Kelas</h5>
              <p className="text-base font-medium">{data.namaSiswa}</p>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="w-full flex flex-row items-start gap-2">
              <UserOutlined className="py-1" />
              <div>
                <h5 className="text-base">Guru BK</h5>
                <p className="text-base font-medium">{data.namaSiswa}</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-start gap-2">
              <MessageOutlined className="py-1" />
              <div>
                <h5 className="text-base">Jenis Sesi</h5>
                <p className="text-base font-medium">{data.namaSiswa}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="w-full flex flex-row items-start gap-2">
              <CommentOutlined className="py-1" />
              <div>
                <h5 className="text-base">Topik Konseling</h5>
                <p className="text-base font-medium">{data.namaSiswa}</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-start gap-2">
              <CalendarOutlined className="py-1" />
              <div>
                <h5 className="text-base">Tanggal Pengajuan</h5>
                <p className="text-base font-medium">
                  {formatTanggal(data.tanggal)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-start gap-2">
            <MessageOutlined className="py-1" />
            <div>
              <h5 className="text-base">Deskripsi</h5>
              <p className="text-base font-medium">{data.namaSiswa}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border border-gray-300 rounded-lg">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-base font-semibold mb-6">
            Balas Ajuan Konseling
          </h1>
        </div>
        <div>
          <form action="" className="w-full space-y-8">
            <div className="flex flex-row gap-8">
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="">Tanggal Konseling</label>
                <TextInput color={"primary"} type="date" required />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="">Status Pengajuan</label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 "
                  required
                >
                  <option selected>Pilih Status Pengajuan</option>
                  <option value="disetujui">Disetujui</option>
                  <option value="ditolak">Ditolak</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="">Link Google Meet</label>
                <TextInput
                  color={"primary"}
                  type="text"
                  placeholder="Link google meet"
                />
                <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
                  <InfoCircleOutlined /> Cantumkan link google meet jika siswa
                  memilih konseling secara daring
                </div>
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="">Tulis Balasan Untuk Siswa</label>
                <textarea
                  id="message"
                  rows="4"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
                  <InfoCircleOutlined /> Balasan akan di kirim ke email siswa
                  secara otomatis
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Button
                color={"secondary"}
                size="md"
                type="submit"
                className="mt-4"
              >
                Batal Balasan
              </Button>
              <Button
                color={"primary"}
                size="md"
                type="submit"
                className="mt-4"
              >
                Kirim
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
