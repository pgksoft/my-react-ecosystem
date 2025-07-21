import { useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import {
  mutationResponse,
  TAxiosParam
} from './http-helpers/mutation-response';

axios.defaults.baseURL = 'http://192.168.1.73:3030/';

type TUseFetch<T> = {
  data: T | null;
  isLoading: boolean;
  error: AxiosError | null;
  update: (axiosParam: TAxiosParam) => void;
  resetError: () => void;
};

const useFetch = <T>(): TUseFetch<T> => {
  const [data, setData] = useState<TUseFetch<T>['data']>(null);
  const [isLoading, setIsLoading] = useState<TUseFetch<T>['isLoading']>(false);
  const [error, setError] = useState<TUseFetch<T>['error']>(null);

  const resetError: TUseFetch<T>['resetError'] = useCallback(() => {
    setError(null);
  }, []);

  const fetchData: TUseFetch<T>['update'] = useCallback(async (axiosParam) => {
    setData(null);
    setIsLoading(true);
    try {
      const response = await mutationResponse<T>(axiosParam);
      setData(response.data);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, update: fetchData, resetError };
};

export default useFetch;
