import { Link, useParams } from "react-router-dom";
import { konsultasiData } from "../../../../models/dashboard/siswa/konsultasiModel";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import DetailPengajuan from "../../../components/layout/konsultasi/siswa/DetailPengajuan";
import DetailKonseling from "../../../components/layout/konsultasi/siswa/DetailKonseling";
import CatatanKonseling from "../../../components/layout/konsultasi/siswa/CatatanKonseling";
import { Button } from "flowbite-react";

const KonsultasiDetail = () => {
  const { id } = useParams();
  const data = konsultasiData.find((item) => item.id === parseInt(id));

  if (!data) {
    return <div className="p-6 text-gray-500">Data tidak ditemukan.</div>;
  }

  return (
    <div className="p-6">
      <Breadcrumb />

      <h1 className="text-2xl font-semibold mb-2">
        Status Pengajuan Konseling
      </h1>
      <p className="text-gray-600 mb-8">
        Permintaan konselingmu sedang diproses. Mohon tunggu balasan dari guru
        BK melalui email atau halaman ini.
      </p>
      <DetailPengajuan data={data} />
      {(data.status === "Disetujui" || data.status === "Selesai") && (
        <DetailKonseling data={data} />
      )}
      {data.status === "Selesai" && <CatatanKonseling data={data} />}

      <Button 
        as={Link}
        to="/dashboard/riwayat"
        color="primary" 
        size="md"
        className="mt-4"
      >
        Kembali
      </Button>
    </div>
  );
};

export default KonsultasiDetail;