import React, { useState, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../../../../../models/dashboard/superadmin/user";
import Breadcrumb from "../../../../components/layout/Breadcrumb";
import DeleteConfirmModal from "../../../../components/modals/DeleteConfirmModal";

const ViewUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    email: "",
    idRef: "",
    role: "",
    tanggalDaftar: ""
  });

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const user = userData.find(item => item.id === parseInt(id));
    if (user) {
      setFormData({
        email: user.email,
        idRef: user.idRef,
        role: user.role,
        tanggalDaftar: user.tanggalDaftar
      });
    }
  }, [id]);

  const handleDelete = () => {
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Delete:", id);
    setOpenModal(false);
    navigate("/dashboard/superadmin");
  };

  return (
    <div>
      <Breadcrumb />
      
      <h1 className="text-2xl font-bold mb-8">Daftar User</h1>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
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
              value={formData.email}
              readOnly
              disabled
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
              value={formData.idRef}
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
            <label htmlFor="tanggalDaftar" className="block mb-2 font-medium">
              Tanggal Daftar
            </label>
            <TextInput
              id="tanggalDaftar"
              name="tanggalDaftar"
              color="primary"
              type="date"
              value={formData.tanggalDaftar}
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
            onClick={() => navigate(`/dashboard/superadmin/edit/${id}`)}
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

export default ViewUser;