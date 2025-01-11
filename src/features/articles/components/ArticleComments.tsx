import { Article } from "@/shared/types/ArticleModel";
import CommentCard from "./CommentCard";
import UserImage from "@/shared/components/UserImage";
import { useGetComments } from "../api/GetCommentsApi";
import type { Comment } from "../types/commentModel";

export default function ArticleComments({ article }: { article: Article }) {
  const { data } = useGetComments(article.slug);
  const comments: Comment[] = data?.data.comments;
  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form">
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
            ></textarea>
          </div>
          <div className="card-footer">
            <UserImage
              image={article?.author.image}
              className="comment-author-img"
            />
            <button className="btn btn-sm btn-primary">Post Comment</button>
          </div>
        </form>

        {comments?.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
