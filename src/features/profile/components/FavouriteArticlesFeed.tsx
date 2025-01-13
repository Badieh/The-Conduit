import { useState } from "react";

import ArticlesList from "../../../shared/components/ArticlesList";

import Pagination from "@/shared/components/Pagination";
import Loading from "@/shared/components/Loading";
import useFavouriteArticles from "../api/FavourtieArticlesApi";

export default function FavouriteArticlesFeed({
  username,
}: {
  username: string;
}) {
  const [page, setPage] = useState(0);

  const { isPending, data } = useFavouriteArticles({
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
