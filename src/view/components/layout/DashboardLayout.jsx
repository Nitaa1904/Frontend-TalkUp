import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  const userRole = "gurubk"; // api role

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed left-0 top-0 h-screen z-10">
        <Sidebar userRole={userRole} />
      </div>
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;