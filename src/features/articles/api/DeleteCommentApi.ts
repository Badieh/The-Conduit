import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function DeleteCommentMutationFunction({
  slug,
  commentId,
}: {
  slug: string;
  commentId: Number;
}) {
  return await axiosClient.delete(`${articlesUrl}/${slug}/comments/${commentId}`);
}

export function useDeleteComment({
  slug,
  commentId,
}: {
  slug: string;
  commentId: Number;
}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createComment"],
    mutationFn: () => DeleteCommentMutationFunction({ slug, commentId }),
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", slug],
      });
      toast.success("Comment deleted");
    },
  });
}
