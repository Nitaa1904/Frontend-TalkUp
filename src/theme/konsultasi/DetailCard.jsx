const DetailCard = ({ title, badge, fields }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-base">{title}</h3>
        {badge && <div>{badge}</div>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {fields.map((field, index) => (
          <div
            key={index}
            className={field.fullWidth ? "md:col-span-2" : ""}
          >
            <div className="flex items-center gap-2 mb-2">
              {field.icon && (
                <span className="text-gray-400 text-lg">{field.icon}</span>
              )}
              <p className="text-gray-500 text-sm font-normal">{field.label}</p>
            </div>
            <div
              onClick={field.onClick}
              className={`${field.icon ? "ml-7" : ""} text-gray-900 font-normal ${
                field.className || ""
              } ${field.onClick ? "cursor-pointer" : ""}`}
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailCard;