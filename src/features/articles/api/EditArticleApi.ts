import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { paths } from "@/routes/AppRouter";
import { Article } from "@/shared/types/ArticleModel";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

async function editArticleMutationFunction({
  slug,
  title,
  description,
  body,
  tagList,
}: {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}) {
  return await axiosClient.put(`${articlesUrl}/${slug}`, {
    article: {
      title: title,
      description: description,
      body: body,
      tagList: tagList,
    },
  });
}

export function useEditArticle({
  slug,
  title,
  description,
  body,
  tagList,
}: {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}) {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["EditArticle"],
    mutationFn: () =>
      editArticleMutationFunction({ slug, title, description, body, tagList }),
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async (data) => {
      toast.success("Article Edited successfully");
      const article: Article = data.data.article;
      navigate(paths.article.getHref(article.slug));
    },
  });
}
