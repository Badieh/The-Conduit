import { useState } from "react";
import { useGlobalArticles } from "../api/GlobalArticlesApi";
import ArticlesList from "./ArticlesList";
import Pagination from "./Pagination";
import { Riple } from "react-loading-indicators";

export default function GlobalFeedArticles() {
  const [page, setPage] = useState(0);

  const globalFeed = useGlobalArticles(page);

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    globalFeed;

  console.log("globalFeed", data);
  const articles = data?.data.articles;
  const articlesCount = data?.data.articlesCount;

  if (isPending) {
    return (
      <div>
        <Riple color="#32cd32" size="medium" />
      </div>
    );
  }

  return (
    <>
      <ArticlesList articles={articles} />

      <Pagination articlesCount={articlesCount} setPage={setPage} />
    </>
  );
}
