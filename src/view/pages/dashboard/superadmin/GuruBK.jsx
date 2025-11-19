import React, { useState } from "react";
import { createTableActions } from "../../../../utils/tableActions";
import { guruBKData } from "../../../../models/dashboard/superadmin/gurubk";
import CustomTable from "../../../../theme/Table";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../../../components/modals/DeleteConfirmModal";

const DaftarGuruBK = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const columns = [
    { header: "Nama", key: "nama" },
    { header: "Role", key: "role" },
    { header: "Jabatan", key: "jabatan" },
    { header: "Email", key: "email" },
  ];

  const actions = createTableActions({
    onEdit: (row) => {
      navigate(`/dashboard/superadmin/daftar-guru-bk/edit/${row.id}`);
    },
    onView: (row) => {
      navigate(`/dashboard/superadmin/daftar-guru-bk/view/${row.id}`);
    },
    onDelete: (row) => {
      setDeleteId(row.id);
      setOpenModal(true);
    },
  });

  const handleAddClick = () => {
    navigate("/dashboard/superadmin/daftar-guru-bk/add");
  };

  const handleConfirmDelete = () => {
    console.log("Delete:", deleteId);
    setOpenModal(false);
  };

  return (
    <>
      <CustomTable
        title="Daftar Guru BK"
        subtitle="Daftar Guru BK SMA N 1 Purwokerto"
        addButtonText="Tambah guru bk"
        onAddClick={handleAddClick}
        columns={columns}
        data={guruBKData}
        actions={actions}
        itemsPerPageOptions={[5, 10, 20]}
        defaultItemsPerPage={5}
      />

      <DeleteConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default DaftarGuruBK;
