import { useEffect, useRef, useState } from 'react';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useEntitySearchParamsInLocalStorage, {
  type TEntityPlacement
} from '../entity-search-params-in-local-storage.hook';
import { useNavigate } from 'react-router-dom';
import useGetPathAndQuery from '../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import type { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import buildQueryString from '../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import getResolvedSearchParams from '../../app-helpers/get-resolved-search-params';

type TResolveEntityGetRequestParamsOptions = {
  entityNameKey: TEntityNameKeys;
  entityPlacement?: TEntityPlacement;
};

type TReturnProps = { isResolved: boolean };

const useResolveEntityGetRequestParams = (
  options: TResolveEntityGetRequestParamsOptions
): TReturnProps => {
  const { entityNameKey, entityPlacement = 'page' } = options;

  const isMounted = useRef(false);
  const targetQueryRef = useRef<TGetParameters>({});

  const [isResolved, setIsResolved] = useState(false);

  const navigate = useNavigate();
  const { pathname, query } = useGetPathAndQuery();

  const { getSearchParams, setLocalStorageKey } =
    useEntitySearchParamsInLocalStorage({});

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    setLocalStorageKey({
      entityNameKey,
      kindGetParams: 'sort',
      entityPlacement
    });
    const sortParams = getSearchParams() as TGetParameters;
    setLocalStorageKey({
      entityNameKey,
      kindGetParams: 'search',
      entityPlacement
    });
    const searchParams = getSearchParams();

    const hasStoredParams =
      Object.keys(sortParams).length > 0 ||
      Object.keys(searchParams).length > 0;

    if (!hasStoredParams) {
      setIsResolved(true);
      return;
    }

    const resolvedSearchParams = getResolvedSearchParams(searchParams);

    targetQueryRef.current = {
      ...query,
      ...resolvedSearchParams,
      ...sortParams
    };

    const currentUrlString = buildQueryString(pathname, query);
    const targetUrlString = buildQueryString(pathname, targetQueryRef.current);

    if (currentUrlString === targetUrlString) {
      setIsResolved(true);
    } else {
      navigate(targetUrlString, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityNameKey, pathname, query]);

  useEffect(() => {
    if (isResolved) return;

    const currentUrlString = buildQueryString(pathname, query);
    const targetUrlString = buildQueryString(pathname, targetQueryRef.current);

    if (currentUrlString === targetUrlString) {
      setIsResolved(true);
    }
  }, [query, isResolved, pathname]);

  return { isResolved };
};

export default useResolveEntityGetRequestParams;
