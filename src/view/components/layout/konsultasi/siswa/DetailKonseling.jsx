import {
  HiOutlineUser,
  HiOutlineChatAlt2,
  HiOutlineCalendar,
} from "react-icons/hi";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";

const DetailKonseling = ({ data }) => {
  const linkText = data.jenis_sesi === "Ruang BK" ? "Ruang BK" : data.link_meet;
  const isClickable = data.jenis_sesi !== "Ruang BK";

  const handleLinkClick = () => {
    if (isClickable && data.link_meet) {
      window.open(data.link_meet, "_blank");
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
      value: data.guru_bk,
      icon: <HiOutlineUser />,
    },
    {
      label: "Jenis Sesi",
      value: linkText,
      icon: <HiOutlineChatAlt2 />,
      onClick: isClickable ? handleLinkClick : undefined,
      className: isClickable
        ? "text-blue-600 underline hover:text-blue-800"
        : "text-gray-600",
    },
    {
      label: "Topik Konseling",
      value: data.topik,
      icon: <HiOutlineChatAlt2 />,
    },
    {
      label: "Tanggal Konseling",
      value: data.tanggal_konseling || "-",
      icon: <HiOutlineCalendar />,
    },
    {
      label: "Deskripsi",
      value: "Silahkan cek email untuk sesi konseling atau klik link pada jenis sesi.",
      icon: <HiOutlineChatAlt2 />,
      fullWidth: true,
    },
  ];

  return <DetailCard title="Detail Konseling" fields={fields} />;
};

export default DetailKonseling;