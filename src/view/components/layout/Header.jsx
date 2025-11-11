import React from "react";
import {DownOutlined, UpOutlined, BellOutlined, UserOutlined} from "@ant-design/icons"

export default function Header() {
  return (
    <>
      <div className="w-full py-4 border-b border-b-gray-200">
        <div className="flex justify-end items-center px-8">
          <div className="">
            <BellOutlined className="text-xl mx-4 cursor-pointer" />
          </div>
          <div className="bg-gray-900 rounded-full">
            <UserOutlined className="text-xl mx-2 my-2 cursor-pointer !text-white" />
          </div>
          <div className="">
            <UpOutlined className="text-xl mx-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
