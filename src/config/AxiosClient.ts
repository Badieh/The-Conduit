import axios from "axios";
import { BaseUrl } from "./ApiConstants";
import { useUserStore } from "@/stores/UserStore";

const axiosClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

axiosClient.interceptors.request.use(function (config) {
  config.headers.Authorization = `Token ${
    useUserStore.getState().user?.token
  } }`;
  return config;
});

export default axiosClient;
