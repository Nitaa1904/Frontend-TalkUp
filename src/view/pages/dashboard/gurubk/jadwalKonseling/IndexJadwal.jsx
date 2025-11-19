import JadwalKonselingTable from "./Tabel";

export default function IndexJadwal() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Daftar Jadwal Konseling</h1>
        <h3 className="text-base">Daftar agenda konseling siswa-siswi</h3>
      </div>

      <JadwalKonselingTable />
    </div>
  );
}