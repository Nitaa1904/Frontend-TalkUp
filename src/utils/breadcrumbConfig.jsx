const generateBreadcrumbMap = () => {
  const map = {
    dashboard: "Dashboard",
    superadmin: "Dashboard",
    "daftar-guru-bk": "Daftar Guru BK",
    "daftar-siswa": "Daftar Siswa",
    add: "Tambah",
    edit: "Edit",
    view: "Lihat",
    permintaankonseling: "Permintaan Konseling",
    jadwalkonseling: "Jadwal Konseling",
    riwayatkonseling: "Riwayat Konseling",
    konsultasi: "Konsultasi",
    riwayat: "Riwayat Konseling",
    gurubk: "Dashboard Guru BK",
  };
  
  return map;
};

export const breadcrumbConfig = generateBreadcrumbMap();