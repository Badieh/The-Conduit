import UserImage from "@/shared/components/UserImage";
import type { Comment } from "../types/commentModel";
import { Link } from "react-router";
import { paths } from "@/routes/AppRouter";
import { useDeleteComment } from "../api/DeleteCommentApi";
import { Article } from "@/shared/types/ArticleModel";

export default function CommentCard({
  article,
  comment,
}: {
  article: Article;
  comment: Comment;
}) {
  const deleteCommentMutation = useDeleteComment({
    slug: article.slug,
    commentId: comment.id,
  });

  function handleDeleteComment() {
    deleteCommentMutation.mutate();
  }
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <UserImage
          image={comment?.author.image}
          className="comment-author-img"
        />
        &nbsp;
        <Link
          to={paths.profile.getHref(comment?.author.username)}
          className="comment-author"
        >
          {comment?.author.username}
        </Link>
        <span className="date-posted">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(comment?.createdAt))}
        </span>
        <button
          className="btn btn-sm btn-outline-secondary pull-xs-right"
          title="Delete comment"
          type="button"
          onClick={handleDeleteComment}
        >
          <i className="ion-trash-a"></i>
        </button>
      </div>
    </div>
  );
}
