import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function favouriteArticleMutationFunction({ slug }: { slug: string }) {
  return await axiosClient.post(`${articlesUrl}/${slug}/favorite`);
}

export function useFavouriteArticle(slug: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["favouriteArticle", slug],
    mutationFn: () => favouriteArticleMutationFunction({ slug }),
    onError: (error: any) => {
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}
