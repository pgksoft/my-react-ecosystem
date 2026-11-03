import type { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type { TPageResponse } from '../../../api-platform/api-response/t-page-response';

export type TFetchOptions = {
  page?: number;
  perPage?: number;
  searchValue?: string;
  baseSearchParams?: TGetParameters;
  signal?: AbortSignal;
};

export type TFetch<T> = (params: TFetchOptions) => Promise<TPageResponse<T>>;
