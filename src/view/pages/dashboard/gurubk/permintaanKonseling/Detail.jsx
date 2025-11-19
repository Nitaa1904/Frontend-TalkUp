import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { historyPengajuan } from "../../../../../models/dashboard/siswa/historyPengajuan";
import Breadcrumb from "../../../../../view/components/layout/Breadcrumb";
import DetailPermintaanKonseling from "../../../../components/layout/konsultasi/gurubk/DetailPermintaan";
import FormBalasanKonseling from "../../../../components/layout/konsultasi/gurubk/FormBalasan";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = historyPengajuan.find((item) => item.id === Number(id));

  if (!data) {
    return <p className="p-6 text-red-500">Data tidak ditemukan.</p>;
  }

  const handleSubmit = (e) => {
    console.log("Form submitted");
  };

  const handleCancel = () => {
    navigate("/dashboard/permintaanKonseling");
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <Breadcrumb />

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <h3 className="text-base">
          Permintaan konselingmu sedang diproses. Mohon tunggu balasan dari guru
          BK melalui email atau halaman ini
        </h3>
      </div>

      <DetailPermintaanKonseling data={data} />
      
      <FormBalasanKonseling onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}