import { paths } from "@/routes/AppRouter";
import DefaultIImage from "@/shared/components/DefaultIImage";
import type { Article } from "@/shared/types/ArticleModel";
import { Link } from "react-router";

export default function ArticleItem({ article }: { article: Article }) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        {/* image */}
        <Link to={paths.profile.getHref(article.author.username)}>
          {article.author.image ? (
            <img
              title="profile"
              src={article.author.image}
              alt="default_user"
              onError={(e) =>
                (e.currentTarget.src = "src/assets/default_user.png")
              }
            />
          ) : (
            <DefaultIImage />
          )}
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
            {" "}
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.createdAt))}
          </span>
        </div>

        {/* Heart Button */}
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
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