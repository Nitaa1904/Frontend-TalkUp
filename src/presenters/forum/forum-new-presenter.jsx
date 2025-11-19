import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useForumNewPresenter = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [identity, setIdentity] = useState("anonim");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Judul dan konten harus diisi!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://40.117.43.104/api/v1/diskusi/",
        {
          judul: title,
          konten: content,
          is_anonim: identity === "anonim",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("HASIL POST:", res.data);

      navigate("/forum");
    } catch (err) {
      console.error("ERROR TAMBAH DISKUSI:", err.response?.data);
      alert("Gagal menambah diskusi!");
    } finally {
      setLoading(false);
    }

    console.log({
      title,
      content,
      identity,
      timestamp: new Date().toISOString(),
    });
    navigate("/forum");
  };

  const handleCancel = () => {
    navigate("/forum");
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    identity,
    setIdentity,
    loading,
    handleSubmit,
    handleCancel,
  };
};
