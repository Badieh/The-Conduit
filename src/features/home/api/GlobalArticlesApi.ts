import { articlesUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function globalFeedQueryFunction(page: number): Promise<AxiosResponse> {
  return axiosClient.get(`${articlesUrl}?offset=${page}&limit=3`); // default limit is 3 articles per page
}

export function useGlobalArticles(page: number): UseQueryResult<AxiosResponse> {
  return useQuery({
    queryKey: ["articles", "global", page],
    queryFn: () => globalFeedQueryFunction(page),
    placeholderData: keepPreviousData,
  });
}
