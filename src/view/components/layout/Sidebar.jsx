"use client";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideBarData } from "../../../models/menu/sidebarData";

const SidebarComponent = ({ userRole = "siswa" }) => {
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
    <div className="min-h-screen w-64 flex flex-col bg-white border-r border-gray-300">
      <div className="w-full flex justify-center py-6">
        <h1 className="text-2xl font-bold text-red-700">TalkUp</h1>
      </div>

      <Sidebar aria-label="Sidebar navigation" className="!bg-white !border-0">
        <SidebarItems>
          <SidebarItemGroup>
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <div key={index}>
                  {item.path === "#" ? (
                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:!bg-[#9B2C2C]/10 hover:!text-[#9B2C2C] w-full transition-colors duration-150 group"
                    >
                      {item.icon && <item.icon className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-[#9B2C2C] mr-3" />}
                      <span className="flex-1 whitespace-nowrap px-3 text-left">{item.name}</span>
                    </button>
                  ) : (
                    <SidebarItem
                      as={Link}
                      to={item.path}
                      active={isActive}
                      icon={item.icon}
                    >
                      {item.name}
                    </SidebarItem>
                  )}
                </div>
              );
            })}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;