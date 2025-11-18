import React, { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { guruBKData } from "../../../../../models/dashboard/superadmin/gurubk";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import DeleteConfirmModal from "../../../../components/modals/DeleteConfirmModal";

const ViewGuruBK = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    role: "",
    jabatan: ""
  });

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const guru = guruBKData.find(item => item.id === parseInt(id));
    if (guru) {
      setFormData({
        nama: guru.nama,
        email: guru.email,
        role: guru.role,
        jabatan: guru.jabatan
      });
    }
  }, [id]);

  const handleDelete = () => {
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Delete:", id);
    setOpenModal(false);
    navigate("/dashboard/superadmin/daftar-guru-bk");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-8">Daftar Guru BK</h1>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
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
              value={formData.nama}
              readOnly
              disabled
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
              value={formData.email}
              readOnly
              disabled
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
              value={formData.role}
              readOnly
              disabled
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
              value={formData.jabatan}
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
            onClick={() => navigate(`/dashboard/superadmin/daftar-guru-bk/edit/${id}`)}
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

export default ViewGuruBK;