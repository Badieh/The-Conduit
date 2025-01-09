import { tagsUrl } from "@/config/ApiConstants";
import axiosClient from "@/config/AxiosClient";
import { useQuery } from "@tanstack/react-query";

async function allTagsQueryFunction() {
  return await axiosClient.get(tagsUrl);
}

export default function useAllTags() {
  return useQuery({ queryKey: ["allTags"], queryFn: allTagsQueryFunction });
}
