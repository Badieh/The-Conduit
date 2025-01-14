import { profilesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function followProfileMutationFunction({
  username,
}: {
  username: string;
}) {
  return await axiosClient.post(`${profilesUrl}/${username}/follow`);
}

export function useFollowProfile(username: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["followProfile", username],
    mutationFn: () => followProfileMutationFunction({ username }),
    onError: (error: any) => {
      toast.error(error.response.data.errors.body);
    },
    onSuccess: async () => {
      toast.success(`You are now following ${username}`);
      queryClient.invalidateQueries({ queryKey: ["profile", username] });
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });
}
