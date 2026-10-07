import { useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import {
  mutationResponse,
  TAxiosParam
} from './http-helpers/mutation-response';

type TUseFetch<T> = {
  data: T | null;
  status: number | null;
  isLoading: boolean;
  error: AxiosError | null;
  update: (axiosParam: TAxiosParam) => void;
  resetError: () => void;
  reset: () => void;
};

const useFetch = <T>(): TUseFetch<T> => {
  const [data, setData] = useState<TUseFetch<T>['data']>(null);
  const [status, setStatus] = useState<TUseFetch<T>['status']>(null);
  const [isLoading, setIsLoading] = useState<TUseFetch<T>['isLoading']>(false);
  const [error, setError] = useState<TUseFetch<T>['error']>(null);

  const resetError: TUseFetch<T>['resetError'] = useCallback(() => {
    setError(null);
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setStatus(null);
    setError(null);
    setIsLoading(false);
  }, []);

  const fetchData: TUseFetch<T>['update'] = useCallback(async (axiosParam) => {
    setData(null);
    setIsLoading(true);
    try {
      const response = await mutationResponse<T>(axiosParam);
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data?.message
      ) {
        const serverMessage = error.response.data?.message;
        setError({ ...error, message: serverMessage ?? error.message });
        setStatus(error.response.status ?? null);
      } else {
        setError(error as AxiosError);
        setStatus(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    status,
    isLoading,
    error,
    update: fetchData,
    resetError,
    reset
  };
};

export default useFetch;
