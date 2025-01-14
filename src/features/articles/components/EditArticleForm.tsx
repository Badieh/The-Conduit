import ArticleForm from "./ArticleForm";
import { Article } from "@/shared/types/ArticleModel";
import { useGetArticle } from "../api/GetArticleApi";
import Loading from "@/shared/components/Loading";

export default function EditArticleForm({ slug }: { slug: string }) {
  const { data, isPending } = useGetArticle(slug);

  const article: Article = data?.data.article;

  if (isPending) return <Loading />;
  return <ArticleForm article={article} />;
}
