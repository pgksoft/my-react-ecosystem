import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  CircularProgress,
  type TextFieldProps
} from '@mui/material';
import type {
  AutocompleteProps,
  AutocompleteValue,
  AutocompleteRenderInputParams,
  AutocompleteChangeReason,
  AutocompleteChangeDetails
} from '@mui/material/Autocomplete';
import { debounce } from 'lodash';
import type { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import getRandomUuid from '../../app-helpers/get-random-uuid';
import type TUnknownRecord from '../../app-types/t-unknown-record';

type TInputKindYup = {
  inputKind: 'yup';
  fieldName: string;
  isValid: boolean;
  errorMessage: string;
  customOnChange: (fieldName: string, value: unknown) => void;
};

type TInputKindMUI = {
  inputKind: 'mui';
  customOnChange: (e: React.SyntheticEvent, value: unknown) => void;
};

type TInputKind = TInputKindYup | TInputKindMUI;

export type TAsyncAutoComplete<T> = {
  textFieldProps?: TextFieldProps;
  baseSearchParams?: TGetParameters;
  /** Если передан — используется постраничная загрузка (infinite scroll) */
  fetchPage?: TFetchPage<T>;
  /** Если передан и fetchPage не передан — используется загрузка всего списка */
  fetchAll?: TFetchAll<T>;
  perPage?: number;
  label?: string;
  renderCard?: (item: T) => React.ReactNode;
  getOptionLabel?: (item: T) => string;
  getOptionDisabled?: (item: T) => boolean;
  noOptionsText?: string;
  /** helper для сравнения объектов (id extractor) */
  getId?: (item: T) => string | number | undefined;
  /** debounce ms для ввода */
  debounceMs?: number;
};

export type TPageResponse<T> = { items: T[]; total: number };

export type TFetchPage<T> = (params: {
  page: number;
  perPage: number;
  searchValue?: string;
  baseSearchParams?: TGetParameters;
  signal?: AbortSignal;
}) => Promise<TPageResponse<T>>;

export type TFetchAll<T> = (params: {
  searchValue: string;
  baseSearchParams?: TGetParameters;
  signal?: AbortSignal;
}) => Promise<T[]>;

export type TAsyncAutoCompleteProps<
  T,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  'renderInput' | 'options'
> &
  TInputKind &
  TAsyncAutoComplete<T>;

export function AsyncAutoComplete<
  T,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>(props: TAsyncAutoCompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  const { inputKind, customOnChange, ...restProps } = props;

  const {
    baseSearchParams,
    fetchPage,
    fetchAll,
    perPage = 20,
    fieldName,
    isValid,
    errorMessage,
    label,
    renderCard,
    getOptionLabel,
    getOptionDisabled,
    noOptionsText,
    getId,
    debounceMs = 300,
    multiple,
    freeSolo,
    textFieldProps,
    ...muiProps
  } = restProps as AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> &
    TAsyncAutoComplete<T> &
    TInputKindYup;

  // state
  const [options, setOptions] = useState<T[]>([]);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  // refs
  // DOM‑узел списка (для чтения/установки scrollTop)
  const listboxRef = useRef<HTMLElement | null>(null);
  // флаг, чтобы не запускать параллельные append‑запросы
  const isAppendingRef = useRef(false);
  // хранит позицию скролла перед append, чтобы восстановить её после добавления элементов
  const scrollPosRef = useRef(0);
  // AbortController для отмены предыдущих запросов при быстром вводе (предотвращает гонки запросов и лишние обновления)
  const abortRef = useRef<AbortController | null>(null);

  // загрузка страницы (пагинация)
  const loadPage = useCallback(
    async (page: number, searchValue: string, append = false) => {
      if (!fetchPage) return;
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);
      try {
        const res = await fetchPage({
          page,
          perPage,
          baseSearchParams,
          searchValue,
          signal: controller.signal
        });
        setTotal(res.total);
        setOptions((prev) => {
          return append ? [...prev, ...res.items] : res.items;
        });
      } finally {
        setLoading(false);
        isAppendingRef.current = false;
      }
    },
    [baseSearchParams, fetchPage, perPage]
  );

  // загрузка всего списка (без пагинации)
  const loadAll = useCallback(
    async (searchValue: string) => {
      if (!fetchAll) return;
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);
      try {
        const res = await fetchAll({
          baseSearchParams,
          searchValue,
          signal: controller.signal
        });
        setOptions(res);
        setTotal(res.length);
      } finally {
        setLoading(false);
      }
    },
    [baseSearchParams, fetchAll]
  );

  // debounce для ввода
  const debouncedSearch = useMemo(() => {
    return debounce((q: string) => {
      if (fetchPage) {
        setPage(1);
        loadPage(1, q, false);
      } else if (fetchAll) {
        loadAll(q);
      }
    }, debounceMs);
  }, [fetchPage, fetchAll, loadPage, loadAll, debounceMs]);

  // обработчик скролла для infinite scroll
  const onListboxScroll = (e: React.UIEvent<HTMLElement>) => {
    const node = e.currentTarget;
    listboxRef.current = node;
    const nearBottom =
      node.scrollHeight - node.scrollTop <= node.clientHeight + 300;
    if (
      nearBottom &&
      options.length < total &&
      !isAppendingRef.current &&
      fetchPage
    ) {
      isAppendingRef.current = true;
      const next = page + 1;
      setPage(next);
      scrollPosRef.current = node.scrollTop;
    }
  };

  // onInputChange — обновляем query (контролируемый ввод)
  const handleInputChange: TAsyncAutoCompleteProps<T>['onInputChange'] = (
    e,
    value,
    reason
  ) => {
    // MUI может передавать reason: 'input' | 'reset' | ...
    setSearchValue(value ?? '');
    // если пользователь передал onInputChange в props — вызвать его
    if (muiProps.onInputChange) {
      muiProps.onInputChange(e, value, reason);
    }
  };

  // onChange — интеграция с yup или mui
  const handleChange = (
    event: React.SyntheticEvent,
    value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>
  ) => {
    if (inputKind === 'yup') {
      customOnChange(fieldName, value);
    } else {
      customOnChange(event, value);
    }
    if (muiProps.onChange) {
      muiProps.onChange(event, value, reason, details);
    }
  };

  const onKeyUpTextField = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    if (options.length !== 1) return;

    const option = options[0];

    // Helper type (multiple/freeSolo)
    const builtValue = (() => {
      if (multiple) {
        return [option] as unknown as AutocompleteValue<
          T,
          Multiple,
          DisableClearable,
          FreeSolo
        >;
      }
      return option as unknown as AutocompleteValue<
        T,
        Multiple,
        DisableClearable,
        FreeSolo
      >;
    })();

    handleChange(event, builtValue, 'selectOption');

    setSearchValue(getOptionLabel ? getOptionLabel(option) : String(option));

    setOpen(false);
  };

  // renderOption
  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T
  ) => {
    const { key: keyProp, ...restProps } = props as TUnknownRecord;
    const explicitKey =
      String(keyProp) || (getId && getId(option)) || getRandomUuid();
    if (renderCard) {
      return (
        <Box component='li' key={explicitKey} {...restProps}>
          {renderCard(option)}
        </Box>
      );
    }
    const labelText = getOptionLabel ? getOptionLabel(option) : String(option);
    return (
      <Box component='li' key={explicitKey} {...restProps}>
        {labelText}
      </Box>
    );
  };

  // isOptionEqualToValue — по id если есть getId
  const isOptionEqualToValue = (option: T, value: T) => {
    if (getId) {
      return getId(option) === getId(value);
    }
    return String(option) === String(value);
  };

  // эффект: при открытии — начальная загрузка
  useEffect(() => {
    if (open) {
      if (fetchPage) {
        loadPage(1, searchValue, false);
      } else if (fetchAll) {
        loadAll(searchValue);
      }
    } else {
      // при закрытии очищаем список и сбрасываем пагинацию
      setOptions([]);
      setPage(1);
      setTotal(0);
      abortRef.current?.abort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // эффект: при изменении query — debounce загрузка
  useEffect(() => {
    debouncedSearch(searchValue);
    return () => {
      return debouncedSearch.cancel();
    };
  }, [searchValue, debouncedSearch]);

  // эффект: при изменении page (для append)
  useEffect(() => {
    if (page > 1 && fetchPage) {
      loadPage(page, searchValue, true);
    }
  }, [page, fetchPage, loadPage, searchValue]);

  // восстановление позиции скролла после append
  useEffect(() => {
    if (listboxRef.current) {
      listboxRef.current.scrollTop = scrollPosRef.current;
    }
  }, [options]);

  const isYup = useMemo<boolean>(() => {
    return inputKind === 'yup';
  }, [inputKind]);

  return (
    <Autocomplete
      {...muiProps}
      multiple={multiple}
      freeSolo={freeSolo}
      open={open}
      onOpen={() => {
        return setOpen(true);
      }}
      onClose={() => {
        return setOpen(false);
      }}
      options={options}
      getOptionLabel={(opt) => {
        return getOptionLabel ? getOptionLabel(opt) : String(opt);
      }}
      getOptionDisabled={getOptionDisabled}
      onInputChange={handleInputChange}
      onChange={handleChange}
      loading={loading}
      isOptionEqualToValue={isOptionEqualToValue}
      slotProps={{
        listbox: {
          onScroll: onListboxScroll,
          sx: { maxHeight: 400 }
        }
      }}
      renderOption={renderOption}
      renderInput={(params: AutocompleteRenderInputParams) => {
        return (
          <TextField
            {...params}
            {...textFieldProps}
            onKeyUp={onKeyUpTextField}
            label={label}
            variant='outlined'
            error={isYup ? !isValid : textFieldProps?.error}
            helperText={isYup ? errorMessage : textFieldProps?.helperText}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading && open ? <CircularProgress size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                )
              }
            }}
          />
        );
      }}
      noOptionsText={noOptionsText}
    />
  );
}
