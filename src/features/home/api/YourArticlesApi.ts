import { yourFeedUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function yourFeedQueryFunction(page: number): Promise<AxiosResponse> {
  return axiosClient.get(`${yourFeedUrl}?offset=${page}&limit=3`); // default limit is 3 articles per page
}

export function useYourFeedArticles(
  page: number
): UseQueryResult<AxiosResponse> {
  return useQuery({
    queryKey: ["yourArticles", page],
    queryFn: () => yourFeedQueryFunction(page),
    placeholderData: keepPreviousData,
  });
}
