import { HiOutlineChatAlt2 } from "react-icons/hi";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";

const CatatanKonseling = ({ data }) => {
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
      label: "Hasil Konseling",
      value: data.hasil_konseling || "Belum ada catatan konseling dari guru BK.",
      icon: <HiOutlineChatAlt2 />,
      fullWidth: true,
    },
  ];

  return <DetailCard title="Catatan Konseling" fields={fields} />;
};

export default CatatanKonseling;