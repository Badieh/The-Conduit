import { paths } from "@/routes/AppRouter";
import UserImage from "@/shared/components/UserImage";
import { Article } from "@/shared/types/ArticleModel";
import { Link } from "react-router";

export default function ArticleBanner({
  article,
  isArticleOwner,
}: {
  article: Article;
  isArticleOwner: boolean;
}) {
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
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-edit"></i> Edit Article
              </button>
              <button className="btn btn-sm btn-outline-danger">
                <i className="ion-trash-a"></i> Delete Article
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow
                <span className="counter">
                  ({article?.author.followersCount})
                </span>
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post
                <span className="counter">({article?.favoritesCount})</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
