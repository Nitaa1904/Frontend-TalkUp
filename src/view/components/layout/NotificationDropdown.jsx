import { useState } from "react";
import { Link } from "react-router-dom";
import { BellOutlined } from "@ant-design/icons";
import { notifikasiData } from "../../../models/notifikasiModel";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifikasiData.filter(n => !n.isRead).length;

  return (
    <div className="relative">
      <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <BellOutlined className="text-lg" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
            {unreadCount}
          </span>
        )}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-3 w-[480px] bg-white shadow-xl rounded-2xl border border-gray-200 z-50 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-red-700">Notifikasi</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifikasiData.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Tidak ada notifikasi
              </div>
            ) : (
              notifikasiData.map((notif) => (
                <Link
                  key={notif.id}
                  to={`/dashboard/konsultasi/${notif.konsultasiId}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    !notif.isRead ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-normal text-gray-900 text-sm">
                      {notif.title}
                    </h4>
                    <span className="text-gray-400">|</span>
                    <span className="text-sm text-gray-400">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {notif.message}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;