import { Article } from "@/shared/types/ArticleModel";
import ArticleItem from "./ArticleItem";

export default function ArticlesList({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-3 px-4">
      {articles?.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </div>
  );
}
