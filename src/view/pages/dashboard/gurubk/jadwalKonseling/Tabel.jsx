import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jadwalKonseling } from "../../../../../models/dashboard/siswa/jadwalKonseling";
import CustomTable from "../../../../../theme/Table";
import { createTableActions } from "../../../../../utils/tableActions";
import DeleteConfirmModal from "../../../../components/modals/DeleteConfirmModal";

export default function JadwalKonselingTable() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const columns = [
    { header: "Waktu", key: "waktu" },
    { header: "Nama Siswa", key: "namaSiswa" },
    { header: "Jenis Sesi", key: "jenisSesi" },
    { header: "Jenis Konseling", key: "jenisKonseling" },
  ];

  const actions = createTableActions({
    onView: (row) => {
      navigate(`/dashboard/JadwalKonseling/${row.id}`);
    },
    onEdit: (row) => {
      navigate(`/dashboard/JadwalKonseling/edit/${row.id}`);
    },
    onDelete: (row) => {
      setDeleteId(row.id);
      setOpenModal(true);
    },
  });

  const handleConfirmDelete = () => {
    console.log("Delete:", deleteId);
    setOpenModal(false);
  };

  return (
    <>
      <CustomTable
        title="Jadwal Konseling Mendatang"
        columns={columns}
        data={jadwalKonseling}
        actions={actions}
        itemsPerPageOptions={[5, 10, 20]}
        defaultItemsPerPage={5}
        showAddButton={false}
      />

      <DeleteConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}