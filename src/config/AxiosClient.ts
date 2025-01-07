import axios from "axios";
import { BaseUrl } from "./ApiConstants";

const axiosClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default axiosClient;
