import { useState, useEffect } from "react";

export const useForumPresenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Lihat semua diskusi");
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterOptions = [
    "Lihat semua diskusi",
    "Diskusi terbaru",
    "Diskusi populer",
  ];
  useEffect(() => {
  }, [filter, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return {
    searchQuery,
    setSearchQuery,
    filter,
    filterOptions,
    discussions,
    loading,
    handleSearch,
    handleFilterChange,
  };
};