import React, { useState } from "react";
import { createTableActions } from "../../../../utils/tableActions";
import { siswaData } from "../../../../models/dashboard/superadmin/siswa";
import CustomTable from "../../../../theme/Table";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../../../components/modals/DeleteConfirmModal";

const DaftarSiswa = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const columns = [
    { header: "Nama Lengkap", key: "namaLengkap" },
    { header: "Email Sekolah", key: "emailSekolah" },
    { header: "Kelas", key: "kelas" },
    { header: "Pembimbing Guru BK", key: "pembimbingGuruBK" },
  ];

  const actions = createTableActions({
    onEdit: (row) => {
      navigate(`/dashboard/superadmin/daftar-siswa/edit/${row.id}`);
    },
    onView: (row) => {
      navigate(`/dashboard/superadmin/daftar-siswa/view/${row.id}`);
    },
    onDelete: (row) => {
      setDeleteId(row.id);
      setOpenModal(true);
    },
  });

  const handleAddClick = () => {
    navigate("/dashboard/superadmin/daftar-siswa/add");
  };

  const handleConfirmDelete = () => {
    console.log("Delete:", deleteId);
    setOpenModal(false);
  };

  return (
    <>
      <CustomTable
        title="Daftar Siswa"
        subtitle="Daftar Siswa SMA N 1 Purwokerto"
        addButtonText="Tambah siswa"
        onAddClick={handleAddClick}
        columns={columns}
        data={siswaData}
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

export default DaftarSiswa;