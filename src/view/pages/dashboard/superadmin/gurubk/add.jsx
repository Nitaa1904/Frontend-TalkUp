import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../../view/components/layout/Breadcrumb";
const AddGuruBK = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    role: "Guru",
    jabatan: "Guru BK"
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
    navigate("/dashboard/superadmin/daftar-guru-bk");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-2">Tambah Guru BK</h1>
      <p className="text-gray-600 mb-8">
        Lengkapi form di bawah untuk menambahkan guru BK baru
      </p>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <label htmlFor="nama" className="block mb-2 font-medium">
                Nama
              </label>
              <TextInput
                id="nama"
                name="nama"
                color="primary"
                type="text"
                placeholder="example"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
          
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
              <label htmlFor="jabatan" className="block mb-2 font-medium">
                Jabatan
              </label>
              <TextInput
                id="jabatan"
                name="jabatan"
                color="primary"
                type="text"
                placeholder="Guru BK"
                value={formData.jabatan}
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
              onClick={() => navigate("/dashboard/superadmin/daftar-guru-bk")}
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuruBK;