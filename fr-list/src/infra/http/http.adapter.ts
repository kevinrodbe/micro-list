import axios, { AxiosRequestConfig } from 'axios';

type RequestConfig = AxiosRequestConfig & { onResponse?: (any) => void };

export const fetcher = (mainConf?: RequestConfig) => {
  const { onResponse, ...restConfig } = mainConf || {};
  const http = axios.create({
    timeout: 25000,
    ...restConfig,
  });

  onResponse?.(http);

  return {
    get: <Response>(url: string, config?: AxiosRequestConfig) => http.get<Response>(url, config),
    post: <Response>(url: string, body, config?: AxiosRequestConfig) => http.post<Response>(url, body, config),
    put: <Response>(url: string, body, config?: AxiosRequestConfig) => http.put<Response>(url, body, config),
    patch: <Response>(url: string, body, config?: AxiosRequestConfig) => http.patch<Response>(url, body, config),
    delete: <Response>(url: string, config?: AxiosRequestConfig) => http.delete<Response>(url, config),
  };
};
