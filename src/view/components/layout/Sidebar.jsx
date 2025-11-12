import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideBarData } from "../../../models/menu/sidebarData";

const Sidebar = ({ userRole = "siswa" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = sideBarData.filter(item => 
    item.roles.includes(userRole)
  );

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-64 flex flex-col bg-white border-r border-gray-200">
      <div className="w-full flex justify-center py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-red-700">TalkUp</h1>
      </div>
      <nav className="flex-1 w-full px-4 py-6 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <div key={index}>
              {item.path === "#" ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-left font-medium transition-colors duration-150 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`px-4 py-3 block font-medium transition-colors duration-150 rounded-md ${
                    isActive
                      ? "bg-red-700 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;