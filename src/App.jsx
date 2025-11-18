import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "flowbite-react";
import customTheme from "./theme";
import "./index.css";
// layout
import MainLayout from "./view/components/layout/MainLayout";
import DashboardLayout from "./view/components/layout/DashboardLayout";
// pages
import Home from "./view/pages/Home";
import Login from "./view/pages/Login";
import Register from "./view/pages/Register";   
import Forum from "./view/pages/Forum";
import ForumNew from "./view/components/layout/forum/ForumNew";
import ForumDetail from "./view/components/layout/forum/ForumDetail";
// superadmin
import SuperAdmin from "./view/pages/dashboard/superadmin";
import DaftarGuruBK from "./view/pages/dashboard/superadmin/GuruBK";
import DaftarSiswa from "./view/pages/dashboard/superadmin/Siswa";
// gurubK
import GuruBK from "./view/pages/dashboard/gurubk/GuruBK";
import IndexPermintaan from "./view/pages/dashboard/gurubk/permintaanKonseling/IndexPermintaan";
import DetailPermintaan from "./view/pages/dashboard/gurubk/permintaanKonseling/DetailPermintaan";
import IndexJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/IndexJadwal";
import DetailJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/DetailJadwal";
// siswa
import Konsultasi from "./view/pages/dashboard/siswa/Konsultasi";
import RiwayatKonseling from "./view/pages/dashboard/siswa/RiwayatKonseling";
import KonsultasiDetail from "./view/pages/dashboard/siswa/KonsultasiDetail";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forum" element={<Forum />} />
            <Route path="forum/new" element={<ForumNew />} />
            <Route path="forum/:id" element={<ForumDetail />} />
          </Route>
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            
            <Route path="superadmin" element={<SuperAdmin />} />
            <Route path="superadmin/daftar-guru-bk" element={<DaftarGuruBK />} />
            <Route path="superadmin/daftar-siswa" element={<DaftarSiswa />} />
            
            <Route path="gurubk" element={<GuruBK />} />
            <Route path="permintaankonseling" element={<IndexPermintaan />} />
            <Route path="permintaankonseling/:id" element={<DetailPermintaan />} />
            <Route path="jadwalkonseling" element={<IndexJadwal />} />
            <Route path="jadwalkonseling/:id" element={<DetailJadwal />} />
            
            <Route path="konsultasi" element={<Konsultasi />} />
            <Route path="riwayat" element={<RiwayatKonseling />} />
            <Route path="konsultasi/:id" element={<KonsultasiDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;