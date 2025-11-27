import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useForumDetailPresenter = (discussionId) => {
  const token = localStorage.getItem("token");

  const [discussion, setDiscussion] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [identity, setIdentity] = useState("anonim");
  const [replyingTo, setReplyingTo] = useState(null);
  const [nestedReplyText, setNestedReplyText] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDiscussionDetail = async () => {
    try {
      const res = await axios.get(`${API_URL}/diskusi/${discussionId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const payload =
        res.data.data || res.data.diskusi || res.data.result || res.data;

      setDiscussion({
        id: payload.id_diskusi,
        judul: payload.judul,
        konten: payload.konten,
        author: payload.is_anonim ? "Anonim" : payload.pembuat_detail?.nama,
        timestamp: payload.created_at,
      });
    } catch (err) {
      console.error("ERROR FETCH DISKUSI DETAIL:", err.response?.data);
    }
  };

  const fetchReplies = async () => {
    try {
      const res = await axios.get(`${API_URL}/balasan/${discussionId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const raw = res.data.data || [];

      const mapped = raw.map((item) => ({
        id: item.id_balasan,
        id_diskusi: item.id_diskusi,
        konten: item.isi_balasan,
        author: item.is_anonim ? "Anonim" : item.user_detail?.nama,
        timestamp: item.created_at,
        nestedReplies: [],
      }));

      setReplies(mapped);
    } catch (err) {
      console.error("ERROR FETCH BALASAN:", err.response?.data);
    }
  };

  useEffect(() => {
    const run = async () => {
      await fetchDiscussionDetail();
      await fetchReplies();
      setLoading(false);
    };
    run();
  }, [discussionId, token]);

  const handleSubmitReply = async () => {
    if (!replyText.trim()) return;

    try {
      await axios.post(
        `${API_URL}/balasan/`,
        {
          id_diskusi: discussionId,
          isi_balasan: replyText,
          is_anonim: identity === "anonim",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReplyText("");

      await fetchReplies();
    } catch (error) {
      console.error("ERROR SUBMIT BALASAN:", error.response?.data);
    }
  };

  const handleSubmitNestedReply = async () => {
    if (!nestedReplyText.trim()) return;

    console.warn(
      "Nested reply belum tersedia karena API backend belum ada endpoint nested."
    );

    setNestedReplyText("");
    setReplyingTo(null);
  };

  const toggleReplyForm = (replyId) => {
    setReplyingTo(replyingTo === replyId ? null : replyId);
  };

  const conversationCount = replies.length;

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
