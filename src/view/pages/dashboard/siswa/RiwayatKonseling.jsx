import { useNavigate } from "react-router-dom";
import { konsultasiData } from "../../../../models/dashboard/siswa/konsultasiModel";
import CustomTable from "../../../../theme/Table";
import { createTableActions } from "../../../../utils/tableActions";
import StatusBadge from "../../../../theme/StatusBadge";

const RiwayatKonseling = () => {
  const navigate = useNavigate();

  const columns = [
    { header: "Nama", key: "nama" },
    { header: "Guru BK", key: "guru_bk" },
    { header: "Jenis Sesi", key: "jenis_sesi" },
    { header: "Topik", key: "topik" },
    { 
      header: "Status", 
      key: "status",
      render: (value) => <StatusBadge status={value} showIcon={false} />
    },
  ];

  const actions = createTableActions({
    onView: (row) => {
      navigate(`/dashboard/konsultasi/${row.id}`);
    },
  });

  return (
    <CustomTable
      title="Riwayat Konseling"
      subtitle="Daftar riwayat konseling anda"
      columns={columns}
      data={konsultasiData}
      actions={actions}
      itemsPerPageOptions={[5, 10, 20]}
      defaultItemsPerPage={5}
      showAddButton={false}
    />
  );
};

export default RiwayatKonseling;