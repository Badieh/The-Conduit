import type { Article } from "@/shared/types/ArticleModel";
import { useUserStore } from "@/stores/UserStore";
import ArticleBanner from "../components/ArticleBanner";
import ArticleContent from "../components/ArticleContent";
import ArticleComments from "../components/ArticleComments";
import { useGetArticle } from "../api/GetArticleApi";
import { useParams } from "react-router";
import { Riple } from "react-loading-indicators";

export default function Article() {
  const slugQuery = useParams();

  const { data, isPending } = useGetArticle(slugQuery.id!);

  const article: Article = data?.data?.article;

  const user = useUserStore((state) => state.user);

  const isArticleOwner = user?.username === article?.author.username;

  if (isPending)
    return (
      <div className="container page">
        <Riple color="#32cd32" size="medium" />
      </div>
    );
  return (
    <div className="article-page">
      <ArticleBanner article={article} isArticleOwner={isArticleOwner} />

      <div className="container page">
        <ArticleContent article={article} />
        <hr />

        <ArticleComments article={article} />
      </div>
    </div>
  );
}
