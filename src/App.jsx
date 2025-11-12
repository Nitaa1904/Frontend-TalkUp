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
import Forum from "./view/pages/Forum";
import ForumNew from "./view/components/layout/forum/ForumNew";
import ForumDetail from "./view/components/layout/forum/ForumDetail";
import GuruBK from "./view/pages/dashboard/gurubk/GuruBK";
import IndexPermintaan from "./view/pages/dashboard/gurubk/permintaanKonseling/IndexPermintaan";
import DetailPermintaan from "./view/pages/dashboard/gurubk/permintaanKonseling/DetailPermintaan";
import IndexJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/IndexJadwal";
import DetailJadwal from "./view/pages/dashboard/gurubk/jadwalKonseling/DetailJadwal";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="gurubk" element={<GuruBK />} />
            <Route path="permintaankonseling" element={<IndexPermintaan />} />
            <Route path="permintaankonseling/:id" element={<DetailPermintaan />} />
            <Route path="jadwalkonseling" element={<IndexJadwal />} />
            <Route path="permintaankonseling/:id" element={<DetailJadwal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
