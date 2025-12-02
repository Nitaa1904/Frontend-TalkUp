import {
  HiOutlineChatAlt2,
  HiOutlineUser,
} from "react-icons/hi";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";

const CatatanKonseling = ({ data }) => {
  const fields = [
    {
      label: "Hasil Konseling",
      value: data.hasil_konseling || "-",
      icon: <HiOutlineChatAlt2 />,
      fullWidth: true,
    },
  ];

  return <DetailCard title="Catatan Konseling" fields={fields} />;
};

export default CatatanKonseling;
