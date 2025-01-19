import { paths } from "@/routes/AppRouter";
import { useFavouriteArticle } from "@/shared/api/FavouriteArticleApi";
import { useUnFavouriteArticle } from "@/shared/api/UnFavouriteArticleApi";
import type { Article } from "@/shared/types/ArticleModel";
import { Link } from "react-router";
import UserImage from "./UserImage";

export default function ArticleItem({ article }: { article: Article }) {
  const favouriteArticleMutation = useFavouriteArticle(article.slug);
  const unFavouriteArticleMutation = useUnFavouriteArticle(article.slug);

  function handleFavouriteArticle() {
    favouriteArticleMutation.mutate();
  }
  function handleUnFavouriteArticle() {
    unFavouriteArticleMutation.mutate();
  }
  return (
    <div className="flex flex-col rounded-xl border border-gray-400 bg-blue-50 px-2 py-2">
      <div className="flex items-center justify-between">
        {/* image */}
        <Link to={paths.profile.getHref(article.author.username)}>
          <UserImage
            image={article.author.image}
            className="mr-4 w-9 rounded-full sm:w-11"
          />
        </Link>

        <div className="flex flex-col justify-center">
          {/* Name */}
          <Link
            to={paths.profile.getHref(article.author.username)}
            className="text-base font-semibold text-blue-500"
          >
            {article.author.username}
          </Link>

          {/* Date */}
          <span className="text-xs text-gray-500 sm:text-base">
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.createdAt))}
          </span>
        </div>

        {/* favourite Button */}
        <button
          className={`ml-auto rounded-2xl border border-gray-400 px-3 ${
            article.favorited ? "bg-blue-400 text-white" : null
          }`}
          onClick={
            article.favorited
              ? handleUnFavouriteArticle
              : handleFavouriteArticle
          }
        >
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>

      {/* Article Info */}
      <Link to={paths.article.getHref(article.slug)} className="px-2">
        <h1 className="font-semibold sm:text-xl">{article.title}</h1>
        <p className="text-sm text-gray-500">{article.description}</p>

        <div className="flex flex-wrap justify-between">
          <span className="text-sm text-gray-500">Read more...</span>
          <ul className="flex justify-end space-x-1">
            {article.tagList.map((tag) => (
              <li
                className="rounded-2xl border border-gray-400 px-2 text-sm text-gray-500"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}
