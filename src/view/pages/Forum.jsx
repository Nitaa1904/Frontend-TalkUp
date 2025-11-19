import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import SearchInput from "../../theme/searchInput";
import FilterDropdown from "../../theme/FilterDropdown";
import DiscussionCard from "../../theme/DiscussionCard";
import { useForumPresenter } from "../../presenters/forum/forum-presenter";
import axios from "axios";

function Forum() {
  const {
    searchQuery,
    setSearchQuery,
    filter,
    filterOptions,
    handleSearch,
    handleFilterChange,
  } = useForumPresenter();

  const [discussionData, setDiscussionData] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(10);

  const fetchDiscussions = async () => {
    try {
      const res = await axios.get("http://40.117.43.104/api/v1/diskusi", {
        params: {
          page,
          limit,
          keyword: searchQuery || "",
          sort: filter || "terbaru",
        },
      });

      console.log("HASIL DARI API:", res.data.data);
      setDiscussionData(res.data.data);
    } catch (err) {
      console.error("ERROR API:", err);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  useEffect(() => {
    fetchDiscussions();
  }, [searchQuery, filter]);

  
  return (
    <section className="bg-white py-12">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Ruang Cerita
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Ruang aman untuk saling berbagi cerita, pengalaman, dan tumbuh
            bersama.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={handleSearch}
            placeholder="Cari diskusi disini..."
            className="flex-1 min-w-[280px]"
          />

          <FilterDropdown
            options={filterOptions}
            value={filter}
            onChange={handleFilterChange}
            className="w-full md:w-auto"
          />

          <div className="flex gap-2 w-full md:w-auto">
            <Button as={Link} to="/forum/new" color="primary" size="md">
              Buat Diskusi Baru
            </Button>
            <Button as={Link} to="/konseling" color="primary" size="md">
              Ajukan Konseling
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {discussionData.map((discussion) => (
            <DiscussionCard
              key={discussion.id_diskusi}
              discussion={discussion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Forum;
