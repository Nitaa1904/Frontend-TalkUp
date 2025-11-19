import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "flowbite-react";
import customTheme from "./theme";
import "./index.css";
import MainLayout from "./view/components/layout/MainLayout";
import DashboardLayout from "./view/components/layout/DashboardLayout";
import Home from "./view/pages/Home";
import Login from "./view/pages/Login";
import Register from "./view/pages/Register";   
import Forum from "./view/pages/Forum";
import ForumNew from "./view/components/layout/forum/ForumNew";
import ForumDetail from "./view/components/layout/forum/ForumDetail";
import SuperAdmin from "./view/pages/dashboard/superadmin";
import DaftarGuruBK from "./view/pages/dashboard/superadmin/GuruBK";
import DaftarSiswa from "./view/pages/dashboard/superadmin/Siswa";
import GuruBK from "./view/pages/dashboard/gurubk/GuruBK";
import IndexPermintaan from "./view/pages/dashboard/gurubk/permintaanKonseling/IndexPermintaan";
import DetailPermintaan from "./view/pages/dashboard/gurubk/permintaanKonseling/Detail";
import IndexJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/IndexJadwal";
import DetailJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/Detail";
import EditJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/Edit";
import Konsultasi from "./view/pages/dashboard/siswa/Konsultasi";
import RiwayatKonseling from "./view/pages/dashboard/siswa/RiwayatKonseling";
import IndexRiwayat from "./view/pages/dashboard/gurubk/riwayatKonseling/IndexRiwayat";
import DetailRiwayat from "./view/pages/dashboard/gurubk/riwayatKonseling/Detail";
import EditRiwayat from "./view/pages/dashboard/gurubk/riwayatKonseling/Edit";
import KonsultasiDetail from "./view/pages/dashboard/siswa/KonsultasiDetail";
import AddGuruBK from "./view/pages/dashboard/superadmin/gurubk/add";
import EditGuruBK from "./view/pages/dashboard/superadmin/gurubk/edit";
import ViewGuruBK from "./view/pages/dashboard/superadmin/gurubk/view";
import AddSiswa from "./view/pages/dashboard/superadmin/siswa/add";
import EditSiswa from "./view/pages/dashboard/superadmin/siswa/edit";
import ViewSiswa from "./view/pages/dashboard/superadmin/siswa/view";
import AddUser from "./view/pages/dashboard/superadmin/user/add";
import EditUser from "./view/pages/dashboard/superadmin/user/edit";
import ViewUser from "./view/pages/dashboard/superadmin/user/view";

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
            <Route path="superadmin/add" element={<AddUser />} />
            <Route path="superadmin/edit/:id" element={<EditUser />} />
            <Route path="superadmin/view/:id" element={<ViewUser />} />
            <Route path="superadmin/daftar-guru-bk" element={<DaftarGuruBK />} />
            <Route path="superadmin/daftar-guru-bk/add" element={<AddGuruBK />} />
            <Route path="superadmin/daftar-guru-bk/edit/:id" element={<EditGuruBK />} />
            <Route path="superadmin/daftar-guru-bk/view/:id" element={<ViewGuruBK />} />
            <Route path="superadmin/daftar-siswa" element={<DaftarSiswa />} />
            <Route path="superadmin/daftar-siswa/add" element={<AddSiswa />} />
            <Route path="superadmin/daftar-siswa/edit/:id" element={<EditSiswa />} />
            <Route path="superadmin/daftar-siswa/view/:id" element={<ViewSiswa />} />
            
            <Route path="gurubk" element={<GuruBK />} />
            <Route path="permintaankonseling" element={<IndexPermintaan />} />
            <Route path="permintaankonseling/:id" element={<DetailPermintaan />} />
            <Route path="jadwalkonseling" element={<IndexJadwal />} />
            <Route path="jadwalkonseling/:id" element={<DetailJadwal />} />
            <Route path="jadwalkonseling/edit/:id" element={<EditJadwal />} />
            <Route path="riwayatkonseling" element={<IndexRiwayat />} />
            <Route path="riwayatkonseling/:id" element={<DetailRiwayat />} />
            <Route path="riwayatkonseling/detail/:id" element={<DetailRiwayat />} />
            <Route path="riwayatkonseling/edit/:id" element={<EditRiwayat />} />
            
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