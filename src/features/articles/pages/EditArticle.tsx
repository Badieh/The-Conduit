import { useParams } from "react-router";

import EditArticleForm from "../components/EditArticleForm";
import ArticleForm from "../components/ArticleForm";

export default function EditArticle() {
  const params = useParams();

  if (params.id) {
    return <EditArticleForm slug={params.id} />; //to edit article
  }
  return <ArticleForm />; // to create a new article
}
