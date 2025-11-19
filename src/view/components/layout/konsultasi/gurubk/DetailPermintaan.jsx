import {
  UserOutlined,
  MessageOutlined,
  CommentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";
import StatusBadge from "../../../../../theme/StatusBadge";

const DetailPermintaanKonseling = ({ data }) => {
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

  const fields = [
    {
      label: "Nama",
      value: data.namaSiswa,
    },
    {
      label: "Kelas",
      value: data.kelas || data.namaSiswa,
    },
    {
      label: "Guru BK",
      value: data.guruBK || data.namaSiswa,
      icon: <UserOutlined />,
    },
    {
      label: "Jenis Sesi",
      value: data.jenisSesi || data.namaSiswa,
      icon: <MessageOutlined />,
    },
    {
      label: "Topik Konseling",
      value: data.topikKonseling || data.namaSiswa,
      icon: <CommentOutlined />,
    },
    {
      label: "Tanggal Pengajuan",
      value: formatTanggal(data.tanggal),
      icon: <CalendarOutlined />,
    },
    {
      label: "Deskripsi",
      value: data.deskripsi || data.namaSiswa,
      icon: <MessageOutlined />,
      fullWidth: true,
    },
  ];

  return (
    <DetailCard
      title="Detail Permintaan Konseling"
      badge={<StatusBadge status={data.status} showIcon={true} />}
      fields={fields}
    />
  );
};

export default DetailPermintaanKonseling;