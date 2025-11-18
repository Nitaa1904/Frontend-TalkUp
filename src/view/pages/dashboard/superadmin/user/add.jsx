import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../../view/components/layout/Breadcrumb";

const AddUser = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    idRef: "",
    role: "",
    tanggalDaftar: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/dashboard/superadmin");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-2">Tambah User</h1>
      <p className="text-gray-600 mb-8">
        Lengkapi form di bawah untuk menambahkan user baru
      </p>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <TextInput
                id="email"
                name="email"
                color="primary"
                type="email"
                placeholder="example@gmail.ac.id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          
            <div className="w-full">
              <label htmlFor="idRef" className="block mb-2 font-medium">
                ID Ref
              </label>
              <TextInput
                id="idRef"
                name="idRef"
                color="primary"
                type="text"
                placeholder="000000000000"
                value={formData.idRef}
                onChange={handleChange}
                required
              />
            </div>
                  
            <div className="w-full">
              <label htmlFor="role" className="block mb-2 font-medium">
                Role
              </label>
              <TextInput
                id="role"
                name="role"
                color="primary"
                type="text"
                placeholder="Guru"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="tanggalDaftar" className="block mb-2 font-medium">
                Tanggal Daftar
              </label>
              <TextInput
                id="tanggalDaftar"
                name="tanggalDaftar"
                color="primary"
                type="date"
                value={formData.tanggalDaftar}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Button
              color="primary" 
              size="md" 
              type="submit"
            >
              Tambah
            </Button>
            <Button
              color="secondary" 
              size="md" 
              type="button"
              onClick={() => navigate("/dashboard/superadmin")}
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;