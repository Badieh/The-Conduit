import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function unFavouriteArticleMutationFunction({ slug }: { slug: string }) {
  return await axiosClient.delete(`${articlesUrl}/${slug}/favorite`);
}

export function useUnFavouriteArticle(slug: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["unFavouriteArticle", slug],
    mutationFn: () => unFavouriteArticleMutationFunction({ slug }),
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}
