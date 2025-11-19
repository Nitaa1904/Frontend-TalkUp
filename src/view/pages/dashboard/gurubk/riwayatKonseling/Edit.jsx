import React from "react";
import { Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { riwayatKonseling } from "../../../../../models/dashboard/siswa/riwayatKonseling";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import DetailRiwayatKonseling from "../../../../components/layout/konsultasi/gurubk/DetailRiwayat";
import CatatanKonselingForm from "../../../../components/layout/konsultasi/gurubk/FormCatatan";

const EditRiwayat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = riwayatKonseling.find((item) => item.id === Number(id));

  if (!data) {
    return <p className="p-6 text-red-500">Data tidak ditemukan.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Update submitted");
    navigate("/dashboard/riwayatKonseling");
  };

  const handleCancel = () => {
    navigate("/dashboard/riwayatKonseling");
  };

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

      <form onSubmit={handleSubmit} className="space-y-8">
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

export default EditRiwayat;