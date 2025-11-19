import {
  UserOutlined,
  MessageOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";
import StatusBadge from "../../../../../theme/StatusBadge";

const DetailRiwayatKonseling = ({ data }) => {
  const handleLinkClick = () => {
    if (data.linkGoogleMeet && data.jenisSesi === "Online") {
      window.open(data.linkGoogleMeet, "_blank");
    }
  };

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
      label: "Guru BK",
      value: data.guruBK,
      icon: <UserOutlined />,
    },
    {
      label: "Jenis Sesi",
      value: data.jenisSesi,
      icon: <MessageOutlined />,
    },
    {
      label: "Topik Konseling",
      value: data.topikKonseling,
      icon: <MessageOutlined />,
    },
    {
      label: "Tanggal Pengajuan",
      value: data.tanggalPengajuan,
      icon: <CalendarOutlined />,
    },
    {
      label: "Tanggal Konseling",
      value: data.tanggalKonseling,
      icon: <CalendarOutlined />,
    },
    {
      label: "Waktu",
      value: data.waktu,
      icon: <ClockCircleOutlined />,
    },
    {
      label: "Link Google Meet",
      value: data.linkGoogleMeet || "-",
      icon: <LinkOutlined />,
      onClick: data.jenisSesi === "Online" && data.linkGoogleMeet ? handleLinkClick : undefined,
      className: data.jenisSesi === "Online" && data.linkGoogleMeet
        ? "text-blue-600 underline hover:text-blue-800 cursor-pointer" 
        : "text-gray-600",
    },
    {
      label: "Deskripsi",
      value: data.deskripsi,
      icon: <MessageOutlined />,
      fullWidth: true,
    },
  ];

  return (
    <DetailCard
      title="Detail Konseling"
      badge={<StatusBadge status={data.status} showIcon={true} />}
      fields={fields}
    />
  );
};

export default DetailRiwayatKonseling;