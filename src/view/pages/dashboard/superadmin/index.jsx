import React, { useState } from "react";
import CustomTable from "../../../../theme/Table";
import { createTableActions } from "../../../../utils/tableActions";
import { userData, statsData } from "../../../../models/dashboard/superadmin/user";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../../../components/modals/DeleteConfirmModal";

const SuperAdmin = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const columns = [
    { header: "Email", key: "email" },
    { header: "Role", key: "role" },
    { header: "ID Ref", key: "idRef" },
    { header: "Tanggal Daftar", key: "tanggalDaftar" },
  ];

  const actions = createTableActions({
    onEdit: (row) => {
      navigate(`/dashboard/superadmin/edit/${row.id}`);
    },
    onView: (row) => {
      navigate(`/dashboard/superadmin/view/${row.id}`);
    },
    onDelete: (row) => {
      setDeleteId(row.id);
      setOpenModal(true);
    },
  });

  const handleAddClick = () => {
    navigate("/dashboard/superadmin/add");
  };

  const handleConfirmDelete = () => {
    console.log("Delete:", deleteId);
    setOpenModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Daftar Siswa dan Guru BK SMA N 1 Purwokerto
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Total User</p>
          <p className="text-3xl font-bold">{statsData.totalUser}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Total SuperAdmin</p>
          <p className="text-3xl font-bold">{statsData.totalSuperAdmin}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Total Guru Bk</p>
          <p className="text-3xl font-bold">{statsData.totalGuruBK}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Total Siswa</p>
          <p className="text-3xl font-bold">{statsData.totalSiswa}</p>
        </div>
      </div>
      
      <CustomTable
        title="Daftar User"
        subtitle="Daftar User SMA N 1 Purwokerto"
        addButtonText="Tambah user"
        onAddClick={handleAddClick}
        columns={columns}
        data={userData}
        actions={actions}
        itemsPerPageOptions={[5, 10, 20]}
        defaultItemsPerPage={5}
      />

      <DeleteConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default SuperAdmin;