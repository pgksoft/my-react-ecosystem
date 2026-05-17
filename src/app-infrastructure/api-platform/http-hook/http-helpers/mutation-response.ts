import axios, { AxiosRequestConfig } from 'axios';

export type TAxiosParam = {
  url: string;
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  headers?: AxiosRequestConfig['headers'];
  signal?: AxiosRequestConfig['signal'];
  baseURL?: AxiosRequestConfig['baseURL'];
};

export const mutationResponse = async <T>(axiosParam: TAxiosParam) => {
  const { url, method, data, headers, signal, baseURL } = axiosParam;
  const response = await axios<T>({
    url,
    method,
    data,
    headers,
    signal,
    baseURL
  });
  return response;
};
