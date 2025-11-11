import { useParams, Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useForumDetailPresenter } from "../../../../presenters/forum/forum-detail-presenter";
import { discussionData, repliesData } from "../../../../models/forum/discussion";
import ReplyItem from "../../../../theme/forum-replay/ReplayItem";
import ReplyForm from "../../../../theme/forum-replay/ReplayForum";

function ForumDetail() {
  const { id } = useParams();
  
  const {
    replyText,
    setReplyText,
    identity,
    setIdentity,
    replyingTo,
    nestedReplyText,
    setNestedReplyText,
    conversationCount,
    handleSubmitReply,
    handleSubmitNestedReply,
    toggleReplyForm,
  } = useForumDetailPresenter(id);

  const discussion = discussionData.find((d) => d.id === parseInt(id));
  const replies = repliesData[id] || [];

  if (!discussion) {
    return (
      <section className="bg-white py-12 min-h-[60vh]">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Diskusi tidak ditemukan
            </h2>
            <Link to="/forum" className="text-primary hover:underline">
              Kembali ke Forum
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <Link 
          to="/forum" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeftOutlined />
          <span>Kembali ke Forum</span>
        </Link>
        <div className="bg-white border border-border rounded-lg p-6">
          <ReplyItem
            reply={discussion}
            showReplyButton={false}
          />
          
          <div className="flex items-center justify-end gap-4 mt-3">
            <span className="text-sm text-gray-500">
              {conversationCount} Percakapan
            </span>
            <span className="text-sm text-gray-700 font-medium">
              Balas
            </span>
          </div>

          <div className="border-t border-border my-6"></div>
          <ReplyForm
            title={discussion.title}
            placeholder="Balas disini..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            identity={identity}
            onIdentityChange={setIdentity}
            onSubmit={handleSubmitReply}
          />
          {replies.map((reply) => (
            <div key={reply.id}>
              <div className="border-t border-border my-6"></div>
              
              <ReplyItem
                reply={reply}
                onReply={() => toggleReplyForm(reply.id)}
              />
              {replyingTo === reply.id && (
                <div className="ml-12 mt-4 pl-4 border-l-2 border-gray-200">
                  <ReplyForm
                    placeholder={`Balas ke ${reply.author}...`}
                    value={nestedReplyText}
                    onChange={(e) => setNestedReplyText(e.target.value)}
                    identity={identity}
                    onIdentityChange={setIdentity}
                    onSubmit={() => handleSubmitNestedReply(reply.id)}
                    onCancel={() => toggleReplyForm(null)}
                    showCancel={true}
                    size="small"
                  />
                </div>
              )}
              {reply.nestedReplies?.length > 0 && (
                <div className="ml-12 mt-4 space-y-4">
                  {reply.nestedReplies.map((nested) => (
                    <div key={nested.id} className="pl-4 border-l-2 border-gray-200">
                      <ReplyItem
                        reply={nested}
                        isNested={true}
                        showReplyButton={false}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForumDetail;