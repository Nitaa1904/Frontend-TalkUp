import { HiOutlineClock } from "react-icons/hi";

const StatusBadge = ({ status, showIcon = true }) => {
  const getBadgeStyle = () => {
    switch (status) {
      case "Menunggu":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-300",
          text: "text-yellow-700",
          icon: <HiOutlineClock className="w-4 h-4" />,
        };
      case "Disetujui":
        return {
          bg: "bg-green-50",
          border: "border-green-300",
          text: "text-green-700",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
      case "Selesai":
        return {
          bg: "bg-blue-50",
          border: "border-blue-300",
          text: "text-blue-700",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
      case "Ditolak":
        return {
          bg: "bg-red-50",
          border: "border-red-300",
          text: "text-red-700",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-300",
          text: "text-gray-700",
          icon: <HiOutlineClock className="w-4 h-4" />,
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${style.bg} ${style.border} ${style.text}`}
    >
      {showIcon && style.icon}
      <span className="font-medium text-sm">{status}</span>
    </div>
  );
};

export default StatusBadge;