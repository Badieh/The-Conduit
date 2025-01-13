import { paths } from "@/routes/AppRouter";
import UserImage from "@/shared/components/UserImage";
import { Article } from "@/shared/types/ArticleModel";
import { Link } from "react-router";
import { useDeleteArticle } from "../api/DeleteArticleApi";
import { useFollowProfile } from "@/shared/api/FollowProfileApi";
import { useUnFollowProfile } from "@/shared/api/UnFollowProfileApi";
import { useFavouriteArticle } from "@/shared/api/FavouriteArticleApi";
import { useUnFavouriteArticle } from "@/shared/api/UnFavouriteArticleApi";

export default function ArticleBanner({
  article,
  isArticleOwner,
}: {
  article: Article;
  isArticleOwner: boolean;
}) {
  const deleteArticleMutation = useDeleteArticle({ slug: article?.slug });

  const followProfileMutation = useFollowProfile(article?.author.username);
  const unFollowProfileMutation = useUnFollowProfile(article?.author.username);

  const favouriteArticleMutation = useFavouriteArticle(article?.slug);
  const unFavouriteArticleMutation = useUnFavouriteArticle(article?.slug);

  function handleFavouriteArticle() {
    favouriteArticleMutation.mutate();
  }
  function handleUnFavouriteArticle() {
    unFavouriteArticleMutation.mutate();
  }
  function handleFollowProfile() {
    followProfileMutation.mutate();
  }
  function handleUnFollowProfile() {
    unFollowProfileMutation.mutate();
  }
  function handleDeleteArticle() {
    if (!window.confirm("Are you sure you want to delete this article?"))
      return;
    deleteArticleMutation.mutate();
  }

  return (
    <div className="banner">
      <div className="container">
        <h1>{article?.title}</h1>

        <div className="article-meta">
          <Link to={paths.profile.getHref(article?.author.username)}>
            <UserImage image={article?.author.image} />
          </Link>
          <div className="info">
            <Link
              to={paths.profile.getHref(article?.author.username)}
              className="author"
            >
              {article?.author.username}
            </Link>
            <span className="date">
              {article?.createdAt &&
                Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(article?.createdAt))}
            </span>
          </div>
          {isArticleOwner ? (
            <>
              <Link to={paths.editArticle.getHref(article?.slug)}>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-edit"></i> Edit Article
                </button>
              </Link>
              &nbsp;&nbsp;
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={handleDeleteArticle}
              >
                <i className="ion-trash-a"></i> Delete Article
              </button>
            </>
          ) : (
            <>
              <button
                className={`btn btn-sm btn-outline-${
                  article?.author.following ? "primary" : "secondary"
                }`}
                onClick={
                  article?.author.following
                    ? handleUnFollowProfile
                    : handleFollowProfile
                }
              >
                <i className="ion-plus-round"></i>
                &nbsp; {article?.author.following ? "Unfollow" : "Follow"}
                <span className="counter">
                  ({article?.author.followersCount})
                </span>
              </button>
              &nbsp;&nbsp;
              <button
                className={`btn btn-sm btn-outline-${
                  article?.favorited ? "primary" : "secondary"
                }`}
                onClick={
                  article?.favorited
                    ? handleUnFavouriteArticle
                    : handleFavouriteArticle
                }
              >
                <i className="ion-heart"></i>
                &nbsp; Favorite Article
                <span className="counter">({article?.favoritesCount})</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
