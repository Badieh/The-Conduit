import { useState } from "react";
import ArticlesList from "./ArticlesList";
import Pagination from "./Pagination";
import { Riple } from "react-loading-indicators";
import { useYourFeedArticles } from "../api/YourArticlesApi";

export default function YourFeedArticles() {
  const [page, setPage] = useState(0);

  const yourFeed = useYourFeedArticles(page);

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    yourFeed;

  console.log("yourFeed", data);
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
