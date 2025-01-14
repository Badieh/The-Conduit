import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { paths } from "@/routes/AppRouter";
import { Article } from "@/shared/types/ArticleModel";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

async function CreateArticleMutationFunction({
  title,
  description,
  body,
  tagList,
}: {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}) {
  return await axiosClient.post(`${articlesUrl}`, {
    article: {
      title: title,
      description: description,
      body: body,
      tagList: tagList,
    },
  });
}

export function useCreateArticle({
  title,
  description,
  body,
  tagList,
}: {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}) {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["createArticle"],
    mutationFn: () =>
      CreateArticleMutationFunction({ title, description, body, tagList }),
    onError: (error: any) => {
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async (data) => {
      toast.success("Article created successfully");
      const article: Article = data.data.article;
      navigate(paths.article.getHref(article.slug));
    },
  });
}
