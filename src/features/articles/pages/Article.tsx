import type { Article } from "@/shared/types/ArticleModel";
import { useUserStore } from "@/stores/UserStore";
import ArticleBanner from "../components/ArticleBanner";
import ArticleContent from "../components/ArticleContent";
import ArticleComments from "../components/ArticleComments";
import { useGetArticle } from "../api/GetArticleApi";
import { useParams } from "react-router";

import Loading from "@/shared/components/Loading";

export default function Article() {
  const slugQuery = useParams();

  const { data, isPending } = useGetArticle(slugQuery.id!);

  const article: Article = data?.data?.article;

  const user = useUserStore((state) => state.user);

  const isArticleOwner = user?.username === article?.author.username;

  if (isPending) return <Loading />;
  return (
    <div className="flex flex-col">
      <ArticleBanner article={article} isArticleOwner={isArticleOwner} />

      <ArticleContent article={article} />
      <hr />

      <ArticleComments article={article} />
    </div>
  );
}
