import { useState } from "react";

import ArticlesList from "../../../shared/components/ArticlesList";

import useArticlesByAuthor from "../api/ArticlesByAuthorApi";
import Pagination from "@/shared/components/Pagination";
import Loading from "@/shared/components/Loading";

export default function AuthorFeedArticles({ username }: { username: string }) {
  const [page, setPage] = useState(0);

  const { isPending, data } = useArticlesByAuthor({
    username: username,
    page: page,
  });

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
