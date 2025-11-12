export const sideBarData = [
  // superadmin
  { 
    name: "Dashboard", 
    path: "/dashboard/superadmin",
    roles: ["superadmin"]
  },
  { 
    name: "Daftar Guru BK", 
    path: "/dashboard/superadmin/daftar-guru-bk",
    roles: ["superadmin"]
  },
  { 
    name: "Daftar Siswa", 
    path: "/dashboard/superadmin/daftar-siswa",
    roles: ["superadmin"]
  },

  // gurubk
  { 
    name: "Dashboard", 
    path: "/dashboard/gurubk",
    roles: ["gurubk"]
  },
  { 
    name: "Permintaan Konseling", 
    path: "/dashboard/permintaankonseling",
    roles: ["gurubk"]
  },
  { 
    name: "Jadwal Konseling", 
    path: "/dashboard/jadwalkonseling",
    roles: ["gurubk"]
  },
  { 
    name: "Riwayat Konseling", 
    path: "/dashboard/riwayatkonseling",
    roles: ["gurubk"]
  },
  
  // siswa
  { 
    name: "Konsultasi", 
    path: "/dashboard/konsultasi",
    roles: ["siswa"]
  },
  { 
    name: "Riwayat Konseling", 
    path: "/dashboard/riwayat",
    roles: ["siswa"]
  },
  
  // umum
  { 
    name: "Logout", 
    path: "#",
    roles: ["gurubk", "siswa"]
  },
];