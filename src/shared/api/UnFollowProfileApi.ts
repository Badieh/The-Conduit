import { profilesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function unFollowProfileMutationFunction({
  username,
}: {
  username: string;
}) {
  return await axiosClient.delete(`${profilesUrl}/${username}/follow`);
}

export function useUnFollowProfile(username: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["unFollowProfile", username],
    mutationFn: () => unFollowProfileMutationFunction({ username }),
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      toast.success(`You are no longer following ${username}`);
      queryClient.invalidateQueries({ queryKey: ["profile", username] });
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });
}
