import {
  HiOutlineUser,
  HiOutlineChatAlt2,
  HiOutlineCalendar,
} from "react-icons/hi";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";
import StatusBadge from "../../../../../theme/StatusBadge";

const DetailPengajuan = ({ data }) => {

  const fields = [
    {
      label: "Nama",
      value: data.nama,
    },
    {
      label: "Kelas",
      value: data.kelas,
    },
    {
      label: "Guru bk",
      value: data.guru_bk,
      icon: <HiOutlineUser />,
    },
    {
      label: "Jenis Sesi",
      value: data.jenis_sesi,
      icon: <HiOutlineChatAlt2 />,
    },
    {
      label: "Topik Konseling",
      value: data.topik,
      icon: <HiOutlineChatAlt2 />,
    },
    {
      label: "Tanggal Pengajuan",
      value: data.tanggal,
      icon: <HiOutlineCalendar />,
    },
    {
      label: "Deskripsi",
      value: data.deskripsi,
      icon: <HiOutlineChatAlt2 />,
      fullWidth: true,
    },
  ];

  return (
    <DetailCard
      title="Detail Pengajuan"
      badge={<StatusBadge status={data.status} />}
      fields={fields}
    />
  );
};

export default DetailPengajuan;