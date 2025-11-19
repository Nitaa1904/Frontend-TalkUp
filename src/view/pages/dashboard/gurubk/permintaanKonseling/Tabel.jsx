import React from "react";
import { useNavigate } from "react-router-dom";
import { historyPengajuan } from "../../../../../models/dashboard/siswa/historyPengajuan";
import CustomTable from "../../../../../theme/Table";
import { createTableActions } from "../../../../../utils/tableActions";
import StatusBadge from "../../../../../theme/StatusBadge";

export default function RiwayatPengajuanTable() {
  const navigate = useNavigate();

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";
    const [day, month, year] = tanggal.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const columns = [
    { 
      header: "Tanggal", 
      key: "tanggal",
      render: (value) => formatTanggal(value)
    },
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
      navigate(`/dashboard/permintaanKonseling/${row.id}`);
    },
  });

  return (
    <CustomTable
      title="Riwayat Pengajuan Terbaru"
      columns={columns}
      data={historyPengajuan}
      actions={actions}
      itemsPerPageOptions={[5, 10, 20]}
      defaultItemsPerPage={5}
      showAddButton={false}
    />
  );
}