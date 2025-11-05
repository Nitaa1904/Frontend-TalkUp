import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const FilterDropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Filter",
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 w-full border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
      >
        <span>{value || placeholder}</span>
        <DownOutlined className="text-xs" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            {options.map((item) => (
              <li
                key={item.value || item}
                onClick={() => {
                  onChange(item.value || item);
                  setIsOpen(false);
                }}
                className="px-4 py-2.5 text-sm hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg transition-colors"
              >
                {item.label || item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default FilterDropdown;