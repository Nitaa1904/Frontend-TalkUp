import { Avatar, Button } from "flowbite-react";
import IdentityDropdown from "../IdentityDropdown";

const ReplyForm = ({ 
  title,
  placeholder = "Balas disini...",
  value,
  onChange,
  identity,
  onIdentityChange,
  onSubmit,
  onCancel,
  showCancel = false,
  isNested = false,
}) => {

  const avatarSize = isNested ? "sm" : "md";
  const rows = isNested ? 3 : 4;
  const buttonSize = isNested ? "sm" : "md";

  return (
    <div className="flex items-start gap-3">
    <Avatar size={avatarSize} color="primary" rounded />
      
      <div className="flex-1">
        <div className="mb-3">
          <IdentityDropdown 
            value={identity} 
            onChange={onIdentityChange}
          />
        </div>

        {title && (
          <h3 className="font-semibold text-gray-900 mb-3">
            {title}
          </h3>
        )}

        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-4 py-3 border border-border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-focus focus:border-focus focus:outline-none resize-none"
        />

        <div className="flex justify-end mt-4 gap-2">
          {showCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Batal
            </button>
          )}
          <Button 
            color="primary" 
            size={buttonSize}
            onClick={onSubmit}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;