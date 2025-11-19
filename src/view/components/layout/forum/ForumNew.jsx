import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar, Button } from "flowbite-react";
import IdentityDropdown from "../../../../theme/IdentityDropdown";
import { useForumNewPresenter } from "../../../../presenters/forum/forum-new-presenter";

function ForumNew() {
  const {
    title,
    setTitle,
    content,
    setContent,
    identity,
    setIdentity,
    handleSubmit,
    handleCancel,
    loading
  } = useForumNewPresenter();

  return (
    <section className="bg-white py-12 min-h-[60vh]">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <Link
          to="/forum"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeftOutlined />
          <span>Kembali ke Forum</span>
        </Link>

        <div className="bg-white border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Buat Diskusi Baru
          </h2>

          <div className="flex items-start gap-3">
            <Avatar size="md" color="primary" rounded />

            <div className="flex-1">
              <div className="mb-4">
                <IdentityDropdown value={identity} onChange={setIdentity} />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Judul Diskusi
                </label>
                <input
                  name="judul"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ketik topik disini..."
                  className="w-full px-4 py-3 border border-border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-focus focus:border-focus focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Konten Diskusi
                </label>
                <textarea
                  name="konten"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Ketik disini..."
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-focus focus:border-focus focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Batal
                </button>
                <Button color="primary" size="md" onClick={handleSubmit}>
                  {loading ? "Posting..." : "Post"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForumNew;
