import { useState } from "react";
import { useGlobalArticles } from "../api/GlobalArticlesApi";
import ArticlesList from "../../../shared/components/ArticlesList";
import Pagination from "../../../shared/components/Pagination";

import Loading from "@/shared/components/Loading";

export default function GlobalFeedArticles() {
  const [page, setPage] = useState(0);

  const { isPending, data } = useGlobalArticles(page);

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
