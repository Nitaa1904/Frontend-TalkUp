import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForumNewPresenter = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [identity, setIdentity] = useState("anonim");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("Judul dan konten harus diisi!");
      return;
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
    handleSubmit,
    handleCancel,
  };
};