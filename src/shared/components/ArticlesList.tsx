import { Article } from "@/shared/types/ArticleModel";
import ArticleItem from "./ArticleItem";

export default function ArticlesList({ articles }: { articles: Article[] }) {
  return (
    <>
      {articles?.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </>
  );
}
