import { paths } from "@/routes/AppRouter";
import UserImage from "@/shared/components/UserImage";
import { Article } from "@/shared/types/ArticleModel";
import { Link } from "react-router";
import { useDeleteArticle } from "../api/DeleteArticleApi";
import { useFollowProfile } from "@/shared/api/FollowProfileApi";
import { useUnFollowProfile } from "@/shared/api/UnFollowProfileApi";
import { useFavouriteArticle } from "@/shared/api/FavouriteArticleApi";
import { useUnFavouriteArticle } from "@/shared/api/UnFavouriteArticleApi";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";
import { FcDislike, FcLike } from "react-icons/fc";

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
    <div className="flex flex-col justify-center gap-4 bg-slate-700 px-4 py-5 sm:px-14 sm:py-10">
      <h1 className="text text-3xl font-bold text-white sm:text-5xl">
        {article?.title}
      </h1>

      <div className="flex items-center gap-2 sm:gap-5">
        <Link to={paths.profile.getHref(article?.author.username)}>
          <UserImage
            image={article?.author.image}
            className="w-9 rounded-full sm:w-16"
          />
        </Link>
        <div className="flex flex-col justify-center">
          <Link
            to={paths.profile.getHref(article?.author.username)}
            className="text-xs font-semibold text-white sm:text-lg"
          >
            {article?.author.username}
          </Link>
          <span className="text-xs text-gray-400 sm:text-lg">
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
              <button className="border border-gray-400">
                <i className="ion-edit"></i> Edit Article
              </button>
            </Link>
            &nbsp;&nbsp;
            <button className="" onClick={handleDeleteArticle}>
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </>
        ) : (
          <>
            <button
              className={`flex h-fit items-center justify-center rounded-md border border-gray-400 px-1 py-1 text-xs sm:px-4 sm:text-lg ${
                article?.author.following ? "bg-blue-200" : "bg-gray-300"
              }`}
              onClick={
                article?.author.following
                  ? handleUnFollowProfile
                  : handleFollowProfile
              }
            >
              {article?.author.following ? (
                <SlUserUnfollow />
              ) : (
                <SlUserFollow />
              )}
              &nbsp; {article?.author.following ? "Unfollow" : "Follow"}
              <span className="counter">
                ({article?.author.followersCount})
              </span>
            </button>
            &nbsp;&nbsp;
            <button
              className={`flex h-fit items-center justify-center rounded-md border border-gray-400 px-1 py-1 text-xs sm:px-4 sm:text-lg ${
                article?.favorited ? "bg-blue-200" : "bg-gray-300"
              }`}
              onClick={
                article?.favorited
                  ? handleUnFavouriteArticle
                  : handleFavouriteArticle
              }
            >
              {article?.favorited ? <FcDislike /> : <FcLike />}
              &nbsp; Favorite
              <span className="counter">({article?.favoritesCount})</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
