import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "flowbite-react";
import customTheme from "./theme";
import "./index.css";
// layout
import MainLayout from "./view/components/layout/MainLayout";
import DashboardLayout from "./view/components/layout/DashboardLayout";
// pages
import Home from "./view/pages/Home";
import Login from "./view/pages/Login";
import Forum from "./view/pages/Forum";
import ForumNew from "./view/components/layout/forum/ForumNew";
import ForumDetail from "./view/components/layout/forum/ForumDetail";
import GuruBK from "./view/pages/dashboard/gurubk/GuruBK";
import Index from "./view/pages/dashboard/gurubk/permintaanKonseling/Index";
import Detail from "./view/pages/dashboard/gurubk/permintaanKonseling/Detail";
import Konsultasi from "./view/pages/dashboard/siswa/Konsultasi";
import RiwayatKonseling from "./view/pages/dashboard/siswa/RiwayatKonseling";
import KonsultasiDetail from "./view/pages/dashboard/siswa/KonsultasiDetail";
import SuperAdmin from "./view/pages/dashboard/superadmin";
import DaftarGuruBK from "./view/pages/dashboard/superadmin/GuruBK";
import DaftarSiswa from "./view/pages/dashboard/superadmin/Siswa";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="forum" element={<Forum />} />
            <Route path="forum/new" element={<ForumNew />} />
            <Route path="forum/:id" element={<ForumDetail />} />
          </Route>
          
          <Route path="/dashboard" element={<DashboardLayout />}>

            <Route path="superadmin" element={<SuperAdmin />} />
            <Route path="superadmin/daftar-guru-bk" element={<DaftarGuruBK />} />
            <Route path="superadmin/daftar-siswa" element={<DaftarSiswa />} />
            
            <Route path="gurubk" element={<GuruBK />} />
            <Route path="permintaankonseling" element={<Index />} />
            <Route path="permintaankonseling/:id" element={<Detail />} />
            
            <Route path="konsultasi" element={<Konsultasi />} />
            <Route path="riwayat" element={<RiwayatKonseling />} />
            <Route path="konsultasi/:id" element={<KonsultasiDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;