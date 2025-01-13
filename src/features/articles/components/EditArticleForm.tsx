import { Riple } from "react-loading-indicators";
import ArticleForm from "./ArticleForm";
import { Article } from "@/shared/types/ArticleModel";
import { useGetArticle } from "../api/GetArticleApi";

export default function EditArticleForm({ slug }: { slug: string }) {
  const { data, isPending } = useGetArticle(slug);

  const article: Article = data?.data.article;

  console.log("article", article);
  if (isPending)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Riple color="#32cd32" size="medium" />
      </div>
    );
  return <ArticleForm article={article} />;
}
