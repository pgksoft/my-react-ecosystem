import type { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import getResolvedSearchParams from '../../app-helpers/get-resolved-search-params';
import type {
  TEntityPlacement,
  TEntitySearchParamsInLocalStorageReturnProps
} from '../../app-hook-helpers/entity-search-params-in-local-storage.hook';

type TGetResolvedListSearchParamsOptions = {
  entityNameKey: TEntityNameKeys;
  entityPlacement: TEntityPlacement;
  setLocalStorageKey: TEntitySearchParamsInLocalStorageReturnProps['setLocalStorageKey'];
  getSearchParams: TEntitySearchParamsInLocalStorageReturnProps['getSearchParams'];
};

export const getResolvedListSearchParams = (
  options: TGetResolvedListSearchParamsOptions
): TGetParameters => {
  const {
    entityNameKey,
    entityPlacement,
    setLocalStorageKey,
    getSearchParams
  } = options;

  setLocalStorageKey({ entityNameKey, entityPlacement, kindGetParams: 'sort' });
  const sortParams = getSearchParams() as TGetParameters;

  setLocalStorageKey({
    entityNameKey,
    entityPlacement,
    kindGetParams: 'search'
  });
  const searchParams = getSearchParams();

  const hasStoredParams =
    Object.keys(sortParams).length > 0 || Object.keys(searchParams).length > 0;

  if (!hasStoredParams) return {};

  const resolvedListSearchParams = getResolvedSearchParams(searchParams);

  return { ...resolvedListSearchParams, ...sortParams };
};
