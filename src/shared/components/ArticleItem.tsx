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
    <div className="article-preview">
      <div className="article-meta">
        {/* image */}
        <Link to={paths.profile.getHref(article.author.username)}>
          <UserImage image={article.author.image} />
        </Link>

        {/* Name */}
        <div className="info">
          <Link
            to={paths.profile.getHref(article.author.username)}
            className="author"
          >
            {article.author.username}
          </Link>

          {/* Date */}
          <span className="date">
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.createdAt))}
          </span>
        </div>

        {/* favourite Button */}
        <button
          className={`btn btn-outline-${
            article.favorited ? "primary" : "secondary"
          } btn-sm pull-xs-right`}
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
      <Link to={paths.article.getHref(article.slug)} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag) => (
            <li className="tag-default tag-pill tag-outline" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}
