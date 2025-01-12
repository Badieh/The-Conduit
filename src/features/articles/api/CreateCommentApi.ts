import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function CreateCommentMutationFunction({
  slug,
  comment,
}: {
  slug: string;
  comment: string;
}) {
  return await axiosClient.post(`${articlesUrl}/${slug}/comments`, {
    comment: {
      body: comment,
    },
  });
}

export function useCreateComment({
  slug,
  comment,
}: {
  slug: string;
  comment: string;
}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createComment"],
    mutationFn: () => CreateCommentMutationFunction({ slug, comment }),
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", slug],
      });
    },
  });
}
