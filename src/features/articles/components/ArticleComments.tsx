import { Article } from "@/shared/types/ArticleModel";
import CommentCard from "./CommentCard";
import UserImage from "@/shared/components/UserImage";
import { useGetComments } from "../api/GetCommentsApi";
import type { Comment } from "../types/commentModel";
import { useCreateComment } from "../api/CreateCommentApi";
import React, { useState } from "react";
import { useUserStore } from "@/stores/UserStore";
import { Link } from "react-router";
import { paths } from "@/routes/AppRouter";

export default function ArticleComments({ article }: { article: Article }) {
  const user = useUserStore((state) => state.user);
  const { data } = useGetComments(article.slug);
  const comments: Comment[] = data?.data.comments;

  const [comment, setComment] = useState("");
  const createCommentMutation = useCreateComment({
    slug: article?.slug,
    comment,
  });

  function handleCreateComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createCommentMutation.mutate(undefined, {
      onSuccess() {
        setComment("");
      },
    });
  }
  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        {user ? (
          <form className="card comment-form" onSubmit={handleCreateComment}>
            <div className="card-block">
              <textarea
                className="form-control"
                placeholder="Write a comment..."
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="card-footer">
              <UserImage
                image={article?.author.image}
                className="comment-author-img"
              />
              <button className="btn btn-sm btn-primary" type="submit">
                Post Comment
              </button>
            </div>
          </form>
        ) : (
          <div>
            <Link to={paths.login.getHref()}>Sign in</Link> or &nbsp;
            <Link to={paths.register.getHref()}>Sign up</Link> to add comments
            on this article.
          </div>
        )}

        {comments?.map((comment) => (
          <CommentCard key={comment.id} comment={comment} article={article} />
        ))}
      </div>
    </div>
  );
}
