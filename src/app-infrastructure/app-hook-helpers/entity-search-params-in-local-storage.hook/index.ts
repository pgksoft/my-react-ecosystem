import { useCallback, useMemo } from 'react';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import {
  localStorageSearchKeys,
  localStorageSortKeys
} from './entourage-settings/local-storage-key';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type {
  TColumnCheckboxItems,
  TColumnDateSearch,
  TColumnFixedRangeNumericalSearch
} from '../../build-entity-table/table-types/t-column-schemas';

type TReturnProps = {
  setSearchParam: <K>(value: K) => void;
  getSearchParam: <K extends TSearchValue>() => K | null;
  hasSearchParam: () => boolean;
  setSearchParams: (searchParams: TUnknownRecord) => void;
  getSearchParams: () => TUnknownRecord;
  removeAllSearchParams: () => void;
  removeSearchParam: () => void;
};

type TSearchValue =
  | string
  | TColumnDateSearch
  | TColumnCheckboxItems
  | TColumnFixedRangeNumericalSearch;

type TKindParams = 'search' | 'sort';

const useEntitySearchParamsInLocalStorage = (
  entityNameKey: TEntityNameKeys,
  nameParam?: string,
  kindParams: TKindParams = 'search'
): TReturnProps => {
  const localStorageKey = useMemo(() => {
    if (kindParams === 'sort') return localStorageSortKeys[entityNameKey];
    return localStorageSearchKeys[entityNameKey];
  }, [entityNameKey, kindParams]);

  const getSearchParams = useCallback((): TUnknownRecord => {
    try {
      const raw = localStorage.getItem(localStorageKey);
      if (raw) {
        return JSON.parse(raw);
      }
      return {};
    } catch {
      return {};
    }
  }, [localStorageKey]);

  const setSearchParams = useCallback(
    (searchParams: TUnknownRecord) => {
      try {
        localStorage.setItem(localStorageKey, JSON.stringify(searchParams));
      } catch {
        /* empty */
      }
    },
    [localStorageKey]
  );

  const removeAllSearchParams = useCallback(() => {
    try {
      localStorage.removeItem(localStorageKey);
    } catch {
      /* empty */
    }
  }, [localStorageKey]);

  const setSearchParam = useCallback(
    <K>(value: K) => {
      if (nameParam) {
        const currentSearchParams = getSearchParams();
        const newSearchParams = {
          ...currentSearchParams,
          [nameParam]: value
        };
        setSearchParams(newSearchParams);
      }
    },
    [getSearchParams, nameParam, setSearchParams]
  );

  const getSearchParam = useCallback(<K>() => {
    if (!nameParam) return null;
    const searchParams = getSearchParams();
    return (searchParams[nameParam] as K) ?? null;
  }, [getSearchParams, nameParam]);

  const hasSearchParam = useCallback((): boolean => {
    if (!nameParam) return false;
    const searchParams = getSearchParams();
    return Object.keys(searchParams).includes(nameParam);
  }, [getSearchParams, nameParam]);

  const removeSearchParam = useCallback(() => {
    if (!nameParam) return null;
    const searchParams = getSearchParams();
    delete searchParams[nameParam];
    if (Object.keys(searchParams).length === 0) {
      removeAllSearchParams();
    } else {
      setSearchParams(searchParams);
    }
  }, [getSearchParams, nameParam, removeAllSearchParams, setSearchParams]);

  return {
    setSearchParam,
    getSearchParam,
    hasSearchParam,
    setSearchParams,
    getSearchParams,
    removeAllSearchParams,
    removeSearchParam
  };
};

export default useEntitySearchParamsInLocalStorage;
