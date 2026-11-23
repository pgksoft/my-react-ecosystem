import { useCallback, useRef } from 'react';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type {
  TColumnCalendar,
  TColumnCheckboxSearch,
  TColumnFixedNumericalRanges,
  TColumnStingSearch
} from '../../build-entity-table/table-types/t-column-schemas';

export type TKindGetParams = 'search' | 'sort';

export type TEntityPlacement = 'page' | 'popup';

type TEntitySearchParamsInLocalStorageOptions = {
  entityNameKey?: TEntityNameKeys;
  nameParam?: string;
  kindGetParams?: TKindGetParams;
  entityPlacement?: TEntityPlacement;
};

type TSetLocalStorageKeyOptions = Pick<
  TEntitySearchParamsInLocalStorageOptions,
  'entityNameKey' | 'kindGetParams' | 'entityPlacement'
>;

export type TEntitySearchParamsInLocalStorageReturnProps = {
  setSearchParam: <K>(value: K) => void;
  getSearchParam: <K extends TSearchValue>() => K | null;
  hasSearchParam: () => boolean;
  setSearchParams: (searchParams: TUnknownRecord) => void;
  getSearchParams: () => TUnknownRecord;
  removeAllSearchParams: () => void;
  removeSearchParam: () => void;
  setLocalStorageKey: (options: TSetLocalStorageKeyOptions) => void;
};

type TSearchValue =
  | string
  | TColumnStingSearch
  | TColumnCalendar
  | TColumnCheckboxSearch
  | TColumnFixedNumericalRanges;

const useEntitySearchParamsInLocalStorage = (
  options: TEntitySearchParamsInLocalStorageOptions
): TEntitySearchParamsInLocalStorageReturnProps => {
  const {
    entityNameKey,
    nameParam,
    kindGetParams = 'search',
    entityPlacement = 'page'
  } = options;

  const localStorageKey = useRef(
    `${entityNameKey}-${entityPlacement}-${kindGetParams}-params`
  );

  const setLocalStorageKey = useCallback(
    ({
      entityNameKey,
      kindGetParams = 'search',
      entityPlacement = 'page'
    }: TSetLocalStorageKeyOptions) => {
      localStorageKey.current = `${entityNameKey}-${entityPlacement}-${kindGetParams}-params`;
    },
    []
  );

  const getSearchParams = useCallback((): TUnknownRecord => {
    try {
      const raw = localStorage.getItem(localStorageKey.current);
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
        localStorage.setItem(
          localStorageKey.current,
          JSON.stringify(searchParams)
        );
      } catch {
        /* empty */
      }
    },
    [localStorageKey]
  );

  const removeAllSearchParams = useCallback(() => {
    try {
      localStorage.removeItem(localStorageKey.current);
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
    removeSearchParam,
    setLocalStorageKey
  };
};

export default useEntitySearchParamsInLocalStorage;
