import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { riwayatKonseling } from "../../../../../models/dashboard/siswa/riwayatKonseling";
import CustomTable from "../../../../../theme/Table";
import { createTableActions } from "../../../../../utils/tableActions";
import DeleteConfirmModal from "../../../../components/modals/DeleteConfirmModal";
import StatusBadge from "../../../../../theme/StatusBadge";

export default function RiwayatKonselingTable() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const columns = [
    { header: "Tanggal", key: "tanggal" },
    { header: "Nama Siswa", key: "namaSiswa" },
    { header: "Jenis Konseling", key: "jenisKonseling" },
      {
          header: "Status",
          key: "status",
           render: (value) => <StatusBadge status={value} showIcon={false} />
      },
  ];

  const actions = createTableActions({
    onView: (row) => {
      navigate(`/dashboard/riwayatKonseling/${row.id}`);
    },
    onEdit: (row) => {
      navigate(`/dashboard/riwayatKonseling/edit/${row.id}`);
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
        title="Daftar Konseling"
        columns={columns}
        data={riwayatKonseling}
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