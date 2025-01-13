import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

async function getFavouriteArticlesQueryFunction({
  username,
  page,
}: {
  username: string;
  page: number;
}) {
  return await axiosClient.get(
    `${articlesUrl}?favorited=${username}&offset=${page}&limit=3`
  );
}

export default function useFavouriteArticles({
  username,
  page,
}: {
  username: string;
  page: number;
}) {
  return useQuery({
    queryKey: ["articles", "favourite", username, page],
    queryFn: () => getFavouriteArticlesQueryFunction({ username, page }),
    placeholderData: keepPreviousData,
  });
}
