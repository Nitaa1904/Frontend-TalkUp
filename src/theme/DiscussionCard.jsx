import React from "react";
import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

const DiscussionCard = ({
  discussion,
  isNested = false,
}) => {
  const avatarSize = isNested ? "sm" : "md";
  const textSize = isNested ? "text-sm" : "text-base";


  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Avatar size={avatarSize} color="primary" rounded />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium text-gray-900">{discussion.author}</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-500">{discussion.timestamp}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {discussion.title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            {discussion.content}
          </p>
          <div className="flex items-center justify-end gap-4">
            <span className="text-sm text-gray-500">
              {discussion.replies} Percakapan
            </span>
            <Link
              to={`/forum/${discussion.id}`}
              className="text-sm text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Balas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;