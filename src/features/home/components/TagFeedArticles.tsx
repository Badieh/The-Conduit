import { useState } from "react";
import ArticlesList from "../../../shared/components/ArticlesList";
import Pagination from "../../../shared/components/Pagination";
import useArticlesByTag from "../api/ArticlesByTagApi";
import Loading from "@/shared/components/Loading";

export default function TagFeedArticles({ tag }: { tag: string }) {
  const [page, setPage] = useState(0);

  const tagFeed = useArticlesByTag({ tag: tag, page: page });

  const { isPending, data } = tagFeed;

  console.log("tagFeed", data);
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
