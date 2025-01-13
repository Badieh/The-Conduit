import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

async function getArticlesByAuthorQueryFunction({
  username,
  page,
}: {
  username: string;
  page: number;
}) {
  return await axiosClient.get(
    `${articlesUrl}?author=${username}&offset=${page}&limit=3`
  );
}

export default function useArticlesByAuthor({
  username,
  page,
}: {
  username: string;
  page: number;
}) {
  return useQuery({
    queryKey: ["articles", "profile", username, page],
    queryFn: () => getArticlesByAuthorQueryFunction({ username, page }),
    placeholderData: keepPreviousData,
  });
}
