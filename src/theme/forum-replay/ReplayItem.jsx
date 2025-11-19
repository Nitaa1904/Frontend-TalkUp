import React from "react";
import { Avatar } from "flowbite-react";

const ReplyItem = ({ 
  reply,
  onReply,
  isNested = false,
  showReplyButton = true
}) => {
  const avatarSize = isNested ? "sm" : "md";
  const textSize = isNested ? "text-sm" : "text-base";

  return (
    <div className="flex items-start gap-3">
    <Avatar size={avatarSize} color="primary" rounded />
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`font-medium text-gray-900 ${isNested ? 'text-sm' : ''}`}>
            {reply.author}
          </span>
          <span className="text-gray-400">|</span>
          <span className={`text-gray-500 ${isNested ? 'text-xs' : 'text-sm'}`}>
            {reply.timestamp}
          </span>
        </div>

        {reply.judul && (
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {reply.judul}
          </h3>
        )}

        <p className={`text-gray-700 leading-relaxed mb-3 ${textSize}`}>
          {reply.konten}
        </p>

        {showReplyButton && (
          <div className="flex items-center justify-end gap-4">
            <span className="text-sm text-gray-500">
              {reply.replies || 0} Percakapan
            </span>
            <button 
              onClick={onReply}
              className="text-sm text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Balas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplyItem;