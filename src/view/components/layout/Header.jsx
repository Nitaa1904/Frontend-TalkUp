import React, { useState } from "react";
import { DownOutlined, UpOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import NotificationDropdown from "./NotificationDropdown";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className="w-full py-4 border-b border-b-gray-200">
        <div className="flex justify-end items-center px-8 relative">
          <div className="mr-4">
            <NotificationDropdown />
          </div>
          <div className="bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
            <UserOutlined className="text-sm cursor-pointer !text-white" />
          </div>
          <div className="" onClick={toggleDropdown}>
            {openDropdown ? (
              <UpOutlined className="text-sm mx-3 cursor-pointer" />
            ) : (
              <DownOutlined className="text-sm mx-3 cursor-pointer" />
            )}
          </div>

          {openDropdown && (
            <div className="absolute right-8 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 w-44 top-full z-10">
              <Link
                to="/"
                className="block px-6 py-2.5 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={() => setOpenDropdown(false)}
              >
                Beranda
              </Link>
              <Link
                to="/forum"
                className="block px-6 py-2.5 hover:bg-gray-100 text-gray-700 text-sm"
                onClick={() => setOpenDropdown(false)}
              >
                Forum Diskusi
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;