import React, { useState } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const IdentityDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const identities = [
    { value: "anonim", label: "Siswa anonim" },
    { value: "real", label: "Nadia Putri" }
  ];

  const selectedIdentity = identities.find(i => i.value === value) || identities[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border border-border hover:bg-gray-50 px-4 py-2 rounded-full transition-colors"
      >
        <span className="font-medium text-gray-900">{selectedIdentity.label}</span>
        <DownOutlined className="text-xs text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg z-20">
            {identities.map((identity) => (
              <button
                key={identity.value}
                onClick={() => {
                  onChange(identity.value);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center gap-2"
              >
                <UserOutlined className="text-gray-600" />
                <span className="text-gray-900">{identity.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default IdentityDropdown;