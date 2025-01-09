import { useState } from "react";
import ArticlesList from "./ArticlesList";
import Pagination from "./Pagination";
import { Riple } from "react-loading-indicators";

import useArticlesByTag from "../api/ArticlesByTagApi";

export default function TagFeedArticles({ tag }: { tag: string }) {
  const [page, setPage] = useState(0);

  const tagFeed = useArticlesByTag({ tag: tag, page: page });

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    tagFeed;

  console.log("tagFeed", data);
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
