import React from "react";
import { Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { jadwalKonseling } from "../../../../../models/dashboard/siswa/jadwalKonseling";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import FormEditBalasan from "../../../../components/layout/konsultasi/gurubk/FormEditBalasan";
import DetailJadwalKonseling from "../../../../components/layout/konsultasi/gurubk/DetailJadwal";
import CatatanKonselingForm from "../../../../components/layout/konsultasi/gurubk/FormCatatan";

export default function EditJadwal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = jadwalKonseling.find((item) => item.id === Number(id));

  if (!data) {
    return <p className="p-6 text-red-500">Data tidak ditemukan.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Update submitted");
    navigate("/dashboard/jadwalKonseling");
  };

  const handleCancel = () => {
    navigate("/dashboard/jadwalKonseling");
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <Breadcrumb />

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Edit Konseling</h1>
        <h3 className="text-base">
          Permintaan konselingmu sedang di proses. Mohon tunggu balasan dari guru BK melalui email atau halaman ini
        </h3>
      </div>

      <DetailJadwalKonseling data={data} />

      <form onSubmit={handleSubmit} className="space-y-8">
        <FormEditBalasan data={data} />

        <CatatanKonselingForm
          catatanSiswa={data.catatanSiswa}
          catatanGuruBK={data.catatanGuruBK}
          readOnly={false}
        />

        <div className="flex flex-row gap-4">
          <Button color="secondary" size="md" type="button" onClick={handleCancel}>
            Batal
          </Button>
          <Button color="primary" size="md" type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}