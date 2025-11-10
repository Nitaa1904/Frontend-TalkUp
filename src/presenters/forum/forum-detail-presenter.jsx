import { useState, useEffect } from "react";

export const useForumDetailPresenter = (discussionId) => {
  const [discussion, setDiscussion] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [identity, setIdentity] = useState("anonim");
  const [replyingTo, setReplyingTo] = useState(null);
  const [nestedReplyText, setNestedReplyText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, [discussionId]);

  const handleSubmitReply = async () => {
    try {
      console.log("Reply to main topic:", replyText, "Identity:", identity);
      setReplyText("");
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  const handleSubmitNestedReply = async (replyId) => {
    try {
      console.log("Reply to comment", replyId, ":", nestedReplyText);
      setNestedReplyText("");
      setReplyingTo(null);
    } catch (error) {
      console.error("Error submitting nested reply:", error);
    }
  };

  const toggleReplyForm = (replyId) => {
    setReplyingTo(replyingTo === replyId ? null : replyId);
  };

  const conversationCount = replies.reduce((total, reply) => {
    return total + 1 + (reply.nestedReplies?.length || 0);
  }, 0);

  return {
    discussion,
    replies,
    replyText,
    setReplyText,
    identity,
    setIdentity,
    replyingTo,
    nestedReplyText,
    setNestedReplyText,
    loading,
    conversationCount,
    handleSubmitReply,
    handleSubmitNestedReply,
    toggleReplyForm,
  };
};