import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { paths } from "@/routes/AppRouter";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

async function DeleteArticleMutationFunction({ slug }: { slug: string }) {
  return await axiosClient.delete(`${articlesUrl}/${slug}`);
}

export function useDeleteArticle({ slug }: { slug: string }) {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["deleteArticle", slug],
    mutationFn: () => DeleteArticleMutationFunction({ slug }),
    onError: (error: any) => {
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      toast.success("Article deleted");
      navigate(paths.home.getHref());
    },
  });
}
