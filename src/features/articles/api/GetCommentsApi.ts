import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useQuery } from "@tanstack/react-query";

async function getCommentsQueryFunction({ slug }: { slug: string }) {
  return await axiosClient.get(`${articlesUrl}/${slug}/comments`);
}

export function useGetComments(slug: string) {
  return useQuery({
    queryKey: ["comments", slug],
    queryFn: () => getCommentsQueryFunction({ slug }),
  });
}
