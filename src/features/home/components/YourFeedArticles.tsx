import { useState } from "react";
import ArticlesList from "../../../shared/components/ArticlesList";
import Pagination from "../../../shared/components/Pagination";
import { useYourFeedArticles } from "../api/YourArticlesApi";
import Loading from "@/shared/components/Loading";

export default function YourFeedArticles() {
  const [page, setPage] = useState(0);

  const yourFeed = useYourFeedArticles(page);

  const { isPending, data } = yourFeed;

  const articles = data?.data.articles;
  const articlesCount = data?.data.articlesCount;

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <ArticlesList articles={articles} />

      <Pagination articlesCount={articlesCount} setPage={setPage} />
    </>
  );
}
