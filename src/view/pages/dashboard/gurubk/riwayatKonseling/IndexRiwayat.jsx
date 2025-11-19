import RiwayatKonselingTable from "./Tabel";

const IndexRiwayat = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Riwayat Konseling</h1>
        <h3 className="text-base">Daftar konseling siswa siswi</h3>
      </div>

      <RiwayatKonselingTable />
    </div>
  );
};

export default IndexRiwayat;