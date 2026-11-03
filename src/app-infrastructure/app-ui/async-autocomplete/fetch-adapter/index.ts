import type { AxiosRequestConfig } from 'axios';
import type { TFetch } from '../types';
import buildQueryString from '../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import {
  mutationResponse,
  type TAxiosParam
} from '../../../api-platform/http-hook/http-helpers/mutation-response';
import type { TPageResponse } from '../../../api-platform/api-response/t-page-response';
import { PAGE_NUMBER_KEY, PAGE_SIZE_KEY } from '../../../app-const/pagination';

type TMakeFetchOptions = {
  baseURL: AxiosRequestConfig['baseURL'];
  apiPath: string;
  searchDataKey: string;
  isPagination?: boolean;
};

const makeFetch = <T>(options: TMakeFetchOptions): TFetch<T> => {
  const { baseURL, apiPath, searchDataKey, isPagination = false } = options;
  return async ({
    page = 1,
    perPage = 15,
    searchValue = '',
    signal,
    baseSearchParams = {}
  }) => {
    const searchDataKeyParam =
      (!!searchValue && { [searchDataKey]: `/${searchValue}/i` }) || {};

    const paginationParams = isPagination
      ? {
          [PAGE_NUMBER_KEY]: String(page),
          [PAGE_SIZE_KEY]: String(perPage)
        }
      : {};

    const params = {
      ...baseSearchParams,
      ...paginationParams,
      ...searchDataKeyParam
    };

    const url = buildQueryString(apiPath, params);

    const axiosParam: TAxiosParam = {
      url,
      method: 'GET',
      signal,
      baseURL
    };

    const res = await mutationResponse<TPageResponse<T>>(axiosParam);

    return res.data;
  };
};

export default makeFetch;
