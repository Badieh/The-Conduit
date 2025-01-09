import DefaultIImage from "@/shared/components/DefaultIImage";
import { Link } from "react-router";

export default function ArticleItem({ article }: { article: Article }) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        {/* image */}
        <Link to="/profile/eric-simons">
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
          <Link to="/profile/eric-simons" className="author">
            {article.author.username}
          </Link>

          {/* Date */}
          <span className="date">{article.createdAt}</span>
        </div>

        {/* Heart Button */}
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>

      {/* Article Info */}
      <a
        href="/article/how-to-build-webapps-that-scale"
        className="preview-link"
      >
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
      </a>
    </div>
  );
}

export type Article = {
  author: {
    username: string;
    image: string;
    following: boolean;
    followersCount: number;
    bio: string;
  };
  slug: string;
  title: string;
  body: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  tagList: string[];
  createdAt: string;
};
