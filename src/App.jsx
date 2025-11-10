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
import Konsultasi from "./view/pages/dashboard/Konsultasi";
import RiwayatKonseling from "./view/pages/dashboard/RiwayatKonseling";
import KonsultasiDetail from "./view/pages/dashboard/KonsultasiDetail";


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/new" element={<ForumNew />} />
            <Route path="/forum/:id" element={<ForumDetail />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard/konsultasi" element={<Konsultasi />} />
            <Route path="/dashboard/riwayat" element={<RiwayatKonseling />} />
            <Route path="/dashboard/konsultasi/:id" element={<KonsultasiDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
