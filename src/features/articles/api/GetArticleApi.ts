import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useQuery } from "@tanstack/react-query";

async function getArticleQueryFunction({ slug }: { slug: string }) {
  return await axiosClient.get(`${articlesUrl}/${slug}`);
}

export function useGetArticle(slug: string) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticleQueryFunction({ slug }),
  });
}
