import type { AxiosRequestConfig } from 'axios';
import type { TFetchAll, TFetchPage } from '..';
import buildQueryString from '../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import {
  mutationResponse,
  type TAxiosParam
} from '../../../api-platform/http-hook/http-helpers/mutation-response';

export const makeFetchPage = <T>(
  baseURL: AxiosRequestConfig['baseURL'],
  pathname: string,
  searchDataKey: string
): TFetchPage<T> => {
  const fn: TFetchPage<T> = async (
    { page, perPage, baseSearchParams, searchValue, signal } = {
      page: 1,
      perPage: 0,
      searchValue: '',
      baseSearchParams: {}
    }
  ) => {
    const searchDataKeyParam =
      (!!searchValue && { [searchDataKey]: `/${searchValue}/i` }) || {};
    const params = {
      ...baseSearchParams,
      page: String(page),
      items: String(perPage),
      ...searchDataKeyParam
    };
    const url = buildQueryString(pathname, params);
    const axiosParam: TAxiosParam = { url, method: 'GET', signal, baseURL };
    const res = await mutationResponse<{
      'hydra:member': T[];
      'hydra:totalItems': number;
    }>(axiosParam);
    return {
      items: res.data['hydra:member'],
      total: res.data['hydra:totalItems']
    };
  };

  return fn;
};

export const makeFetchAll = <T>(
  baseURL: AxiosRequestConfig['baseURL'],
  pathname: string,
  searchDataKey: string
): TFetchAll<T> => {
  const fn: TFetchAll<T> = async (
    { searchValue, signal, baseSearchParams } = {
      searchValue: '',
      baseSearchParams: {}
    }
  ) => {
    const searchDataKeyParam =
      (!!searchValue && { [searchDataKey]: `/${searchValue}/i` }) || {};
    const params = { ...baseSearchParams, ...searchDataKeyParam };
    const url = buildQueryString(pathname, params);
    const axiosParam: TAxiosParam = { url, method: 'GET', signal, baseURL };
    const res = await mutationResponse<T[]>(axiosParam);
    return res.data;
  };

  return fn;
};
