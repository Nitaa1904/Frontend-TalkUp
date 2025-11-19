import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../../view/components/layout/Breadcrumb";

const AddSiswa = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    namaLengkap: "",
    emailSekolah: "",
    kelas: "",
    pembimbingGuruBK: ""
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
    navigate("/dashboard/superadmin/daftar-siswa");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-2">Tambah Siswa</h1>
      <p className="text-gray-600 mb-8">
        Lengkapi form di bawah untuk menambahkan siswa baru
      </p>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <label htmlFor="namaLengkap" className="block mb-2 font-medium">
                Nama Lengkap
              </label>
              <TextInput
                id="namaLengkap"
                name="namaLengkap"
                color="primary"
                type="text"
                placeholder="example"
                value={formData.namaLengkap}
                onChange={handleChange}
                required
              />
            </div>
          
            <div className="w-full">
              <label htmlFor="emailSekolah" className="block mb-2 font-medium">
                Email Sekolah
              </label>
              <TextInput
                id="emailSekolah"
                name="emailSekolah"
                color="primary"
                type="email"
                placeholder="example@gmail.ac.id"
                value={formData.emailSekolah}
                onChange={handleChange}
                required
              />
            </div>
                  
            <div className="w-full">
              <label htmlFor="kelas" className="block mb-2 font-medium">
                Kelas
              </label>
              <TextInput
                id="kelas"
                name="kelas"
                color="primary"
                type="text"
                placeholder="XI"
                value={formData.kelas}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="pembimbingGuruBK" className="block mb-2 font-medium">
                Pembimbing Guru BK
              </label>
              <TextInput
                id="pembimbingGuruBK"
                name="pembimbingGuruBK"
                color="primary"
                type="text"
                placeholder="Guru BK"
                value={formData.pembimbingGuruBK}
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
              onClick={() => navigate("/dashboard/superadmin/daftar-siswa")}
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSiswa;