import React, { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { siswaData } from "../../../../../models/dashboard/superadmin/siswa";
import Breadcrumb from "../../../../components/layout/Breadcrumb";

const EditSiswa = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    namaLengkap: "",
    emailSekolah: "",
    kelas: "",
    pembimbingGuruBK: ""
  });

  useEffect(() => {
    const siswa = siswaData.find(item => item.id === parseInt(id));
    if (siswa) {
      setFormData({
        namaLengkap: siswa.namaLengkap,
        emailSekolah: siswa.emailSekolah,
        kelas: siswa.kelas,
        pembimbingGuruBK: siswa.pembimbingGuruBK
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form updated:", formData);
    navigate("/dashboard/superadmin/daftar-siswa");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-8">Daftar Siswa</h1>

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
              color="secondary" 
              size="md" 
              type="submit"
            >
              Edit
            </Button>
            <Button
              color="primary" 
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

export default EditSiswa;