import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4 relative">
      <div></div>

      <div className="flex items-center space-x-4">
        <button className="relative text-gray-700 hover:text-gray-900">
          <span className="text-xl">🔔</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            👤
          </button>

          {openDropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md border w-40">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Beranda
              </Link>
              <Link
                to="/forum"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Forum Diskusi
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
