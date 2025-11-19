import React from "react";
import { Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { riwayatKonseling } from "../../../../../models/dashboard/siswa/riwayatKonseling";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import DetailRiwayatKonseling from "../../../../components/layout/konsultasi/gurubk/DetailRiwayat";
import CatatanKonselingForm from "../../../../components/layout/konsultasi/gurubk/FormCatatan";

export default function DetailRiwayat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = riwayatKonseling.find((item) => item.id === Number(id));

  if (!data) {
    return <p className="p-6 text-red-500">Data tidak ditemukan.</p>;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <Breadcrumb />

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Riwayat Konseling</h1>
        <h3 className="text-base">
          Permintaan konselingmu sedang di proses. Mohon tunggu balasan dari guru BK melalui email atau halaman ini
        </h3>
      </div>

      <DetailRiwayatKonseling data={data} />

      <CatatanKonselingForm
        catatanSiswa={data.catatanSiswa}
        catatanGuruBK={data.catatanGuruBK}
        readOnly={true}
      />

      <Button
        color="primary"
        size="md"
        onClick={() => navigate("/dashboard/riwayatKonseling")}
        className="mt-4 w-fit"
      >
        Export
      </Button>
    </div>
  );
}