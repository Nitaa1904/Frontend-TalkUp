import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput = ({ value, onChange, onSearch, placeholder, className = "" }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder || "Cari diskusi disini..."}
        className="w-full pl-4 pr-12 py-2.5 bg-white text-gray-700 placeholder-gray-500 border border-border rounded-full text-sm focus:ring-1 focus:ring-focus focus:border-focus focus:outline-none"
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        aria-label="Search"
      >
        <SearchOutlined className="text-gray-500 text-base" />
      </button>
    </div>
  );
};

export default SearchInput;