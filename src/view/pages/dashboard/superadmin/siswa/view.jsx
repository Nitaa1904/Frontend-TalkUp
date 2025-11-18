import React, { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { siswaData } from "../../../../../models/dashboard/superadmin/siswa";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import DeleteConfirmModal from "../../../../components/modals/DeleteConfirmModal";

const ViewSiswa = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    namaLengkap: "",
    emailSekolah: "",
    kelas: "",
    pembimbingGuruBK: ""
  });

  const [openModal, setOpenModal] = useState(false);

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

  const handleDelete = () => {
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Delete:", id);
    setOpenModal(false);
    navigate("/dashboard/superadmin/daftar-siswa");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-8">Daftar Siswa</h1>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
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
              value={formData.namaLengkap}
              readOnly
              disabled
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
              value={formData.emailSekolah}
              readOnly
              disabled
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
              value={formData.kelas}
              readOnly
              disabled
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
              value={formData.pembimbingGuruBK}
              readOnly
              disabled
            />
          </div>
        </div>
        
        <div className="mt-12 flex gap-4">
          <Button
            color="secondary" 
            size="md"
            type="button"
            onClick={() => navigate(`/dashboard/superadmin/daftar-siswa/edit/${id}`)}
          >
            Edit
          </Button>
          
          <Button
            color="primary" 
            size="md" 
            type="button"
            onClick={handleDelete}
          >
            Hapus
          </Button>
        </div>
      </div>

      <DeleteConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ViewSiswa;