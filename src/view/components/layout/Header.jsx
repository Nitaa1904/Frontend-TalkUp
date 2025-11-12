import React, { useState } from "react";
import { DownOutlined, UpOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className="w-full py-4 border-b border-b-gray-200">
        <div className="flex justify-end items-center px-8 relative">
          <div className="">
            <BellOutlined className="text-xl mx-4 cursor-pointer" />
          </div>
          <div className="bg-gray-900 rounded-full">
            <UserOutlined className="text-xl mx-2 my-2 cursor-pointer !text-white" />
          </div>
          <div className="" onClick={toggleDropdown}>
            {openDropdown ? (
              <UpOutlined className="text-xl mx-4 cursor-pointer" />
            ) : (
              <DownOutlined className="text-xl mx-4 cursor-pointer" />
            )}
          </div>

          {openDropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md border w-40 top-full">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setOpenDropdown(false)}
              >
                Beranda
              </Link>
              <Link
                to="/forum"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
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
}