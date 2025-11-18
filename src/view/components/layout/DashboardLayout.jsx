import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const userRole = "siswa"; // api role

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={userRole} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;