import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type { TFetch } from '../types';
import { debounce } from 'lodash';
import type { TDataLoadingMode } from '../../../app-types/t-data-loading-mode';

type TUseAsyncAutoCompleteProps<T> = {
  fetch: TFetch<T>;
  dataLoadingMode?: TDataLoadingMode;
  perPage?: number;
  debounceMs?: number;
  baseSearchParams?: TGetParameters;
  isListOpen?: boolean;
};

type TLoadOptions = {
  pageToLoad?: number;
  searchValue: string;
  append?: boolean;
};

//TODO: Must check of Multiple autocomplete mode

export type TUseAsyncAutoCompleteResult<T> = {
  options: T[];
  loading: boolean;
  hasMore: boolean;

  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;

  load: (options: TLoadOptions) => Promise<void>;
  loadNextPage: () => Promise<void>;

  reset: () => void;
};

export const useAsyncAutoComplete = <T>({
  fetch,
  dataLoadingMode = 'page',
  perPage = 15,
  debounceMs = 300,
  baseSearchParams,
  isListOpen = false
}: TUseAsyncAutoCompleteProps<T>): TUseAsyncAutoCompleteResult<T> => {
  const [options, setOptions] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const totalRef = useRef(0);
  const abortRef = useRef<AbortController | null>(null);
  const lastFetchedQueryRef = useRef<string | null>(null);

  const fetchRef = useRef(fetch);
  const baseSearchParamsRef = useRef(baseSearchParams);
  const dataLoadingModeRef = useRef(dataLoadingMode);
  const perPageRef = useRef(perPage);

  const hasMore = useMemo(() => {
    return options.length < totalRef.current;
  }, [options.length]);

  const load = useCallback(async (options: TLoadOptions) => {
    const { pageToLoad = 1, searchValue: query, append = false } = options;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);

    try {
      const res = await fetchRef.current({
        page: dataLoadingModeRef.current === 'page' ? pageToLoad : 0,
        perPage: dataLoadingModeRef.current === 'page' ? perPageRef.current : 0,
        searchValue: query,
        baseSearchParams: baseSearchParamsRef.current,
        signal: controller.signal
      });

      // Save successful query
      lastFetchedQueryRef.current = query;

      totalRef.current = res.total;

      setOptions((prev) => {
        return append ? [...prev, ...res.items] : res.items;
      });
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'CanceledError') return;
      // eslint-disable-next-line no-console
      console.warn('error load AsyncAutoCOmplete', {
        code: error instanceof Error && error.name,
        message: error instanceof Error && error.message
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const loadNextPage = useCallback(async () => {
    if (dataLoadingMode === 'all' || !hasMore || loading) return;

    const nextPage = page + 1;

    await load({ pageToLoad: nextPage, searchValue, append: true });

    setPage(nextPage);
  }, [dataLoadingMode, hasMore, load, loading, page, searchValue]);

  const debouncedSearch = useMemo(() => {
    return debounce((query: string, mode: TDataLoadingMode) => {
      if (mode == 'page') setPage(1);

      void load({ searchValue: query });
    }, debounceMs);
  }, [debounceMs, load]);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    totalRef.current = 0;
    setOptions([]);
    if (dataLoadingMode == 'page') setPage(1);
  }, [dataLoadingMode]);

  useEffect(() => {
    if (!isListOpen) return;

    // 🚀 SMART CHECK to eliminate unnecessary server requests: Multiple = false
    const isSameQuery = lastFetchedQueryRef.current === searchValue;
    const hasCachedOptions = options.length > 0;
    if (hasCachedOptions && isSameQuery) return;

    debouncedSearch(searchValue, dataLoadingMode);

    return () => {
      debouncedSearch.cancel();
    };
  }, [
    dataLoadingMode,
    debouncedSearch,
    isListOpen,
    options.length,
    searchValue
  ]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    fetchRef.current = fetch;
    baseSearchParamsRef.current = baseSearchParams;
    dataLoadingModeRef.current = dataLoadingMode;
    perPageRef.current = perPage;
  });

  return {
    options,
    hasMore,
    loading,

    searchValue,
    setSearchValue,

    load,
    loadNextPage,

    reset
  };
};
