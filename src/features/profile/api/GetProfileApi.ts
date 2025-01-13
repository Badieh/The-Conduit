import { profilesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useQuery } from "@tanstack/react-query";

async function getProfileQueryFunction({ username }: { username: string }) {
  return await axiosClient.get(`${profilesUrl}/${username}`);
}

export function useGetProfile(username: string) {
  return useQuery({
    queryKey: ["profile", username],
    queryFn: () => getProfileQueryFunction({ username }),
  });
}
