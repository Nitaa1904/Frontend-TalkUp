// import Sidebar from "./Sidebar";
// import Header from "./Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
