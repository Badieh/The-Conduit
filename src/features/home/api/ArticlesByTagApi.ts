import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

async function getArticlesByTagQueryFunction({
  tag,
  page,
}: {
  tag: string;
  page: number;
}) {
  return await axiosClient.get(
    `${articlesUrl}?tag=${tag}&offset=${page}&limit=3`
  );
}

export default function useArticlesByTag({
  tag,
  page,
}: {
  tag: string;
  page: number;
}) {
  return useQuery({
    queryKey: ["articlesByTag", tag, page],
    queryFn: () => getArticlesByTagQueryFunction({ tag, page }),
    placeholderData: keepPreviousData,
  });
}
