import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideBarData } from "../../../models/menu/sidebarData";

export default function Sidebars() {
  const location = useLocation();

  return (
    <>
      <div className=" min-h-screen w-72 flex flex-col items-center border-r border-gray-200">
        <div className="w-full flex justify-center py-6">
          <img src="/assets/images/logo-dark.svg" alt="" />
        </div>

        <div className="w-full p-6">
          {sideBarData.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div key={index} className="mb-2">
                <Link
                  to={item.path}
                  className={`px-4 py-4 block transition-colors duration-150 rounded-md
                    ${
                      isActive
                        ? "bg-primary text-white font-medium "
                        : "hover:bg-primary/10 text-gray-500 hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
