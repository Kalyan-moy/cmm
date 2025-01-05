import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SIGNUP_URL } from "@/constants/endpoints.constants";
import { _getToken, _removeToken } from "./auth.utils";

export const BASE_URL = "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      if (!(config.url === SIGNUP_URL && config.method === "post")) {
        const token = _getToken();
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
      return config;
    } catch (error) {
      return Promise.reject(new Error(error as any));
    }
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Authentication Error : ", error);
    if (
      error.response.status === 401 &&
      error.response.data.message &&
      error.response.data.message.includes("invalid token")
    ) {
      _removeToken();
    }

    return Promise.reject(new Error(error));
  }
);

export const invokeApi = async <T>({
  url,
  method,
  data,
  params,
}: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.request<T>({
    url,
    method,
    data,
    params,
  });
  return response.data;
};
