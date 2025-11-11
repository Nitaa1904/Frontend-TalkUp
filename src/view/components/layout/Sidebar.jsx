import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-700">TalkUp</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <NavLink
          to="/dashboard/konsultasi"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md font-medium ${
              isActive
                ? "bg-red-700 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Konsultasi
        </NavLink>

        <NavLink
          to="/dashboard/riwayat"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md font-medium ${
              isActive
                ? "bg-red-700 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Riwayat Konseling
        </NavLink>

        <button className="mt-6 block text-left text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-md">
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
