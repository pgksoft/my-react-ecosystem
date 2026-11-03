import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  type AutocompleteChangeDetails,
  type AutocompleteChangeReason,
  type AutocompleteProps,
  type AutocompleteRenderInputParams,
  type AutocompleteValue,
  type TextFieldProps
} from '@mui/material';
import type { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type { TFetch } from './types';
import { useAsyncAutoComplete } from './hooks/use-async-autocomplete';
import { useInfiniteScroll } from './hooks/use-infinite-scroll';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import getRandomUuid from '../../app-helpers/get-random-uuid';
import type { TDataLoadingMode } from '../../app-types/t-data-loading-mode';

type TInputKindYup = {
  inputKind: 'yup';
  fieldName: string;
  isValid: boolean;
  errorMessage: string;
  customOnChange: (fieldName: string, value: unknown) => void;
};

export type TAsyncAutoComplete<T> = {
  textFieldProps?: TextFieldProps;
  baseSearchParams?: TGetParameters;
  dataLoadingMode: TDataLoadingMode;
  fetch: TFetch<T>;
  perPage?: number;
  label?: string;
  renderCard?: (item: T) => React.ReactNode;
  getOptionLabel?: (item: T) => string;
  getOptionDisabled?: (item: T) => boolean;
  noOptionsText?: string;
  /** helper - id extractor */
  getId?: (item: T) => string | number | undefined;
  /** debounce ms for input searchValue */
  debounceMs?: number;
};

type TAsyncAutoCompleteProps<
  T,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> =
  | (Omit<
      AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      'renderInput' | 'options'
    > &
      TAsyncAutoComplete<T> & {
        inputKind: 'yup';
        fieldName: string;
        isValid: boolean;
        errorMessage: string;
        customOnChange: (fieldName: string, value: unknown) => void;
      })
  | (Omit<
      AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      'renderInput' | 'options'
    > &
      TAsyncAutoComplete<T> & {
        inputKind: 'mui';
        customOnChange: (e: React.SyntheticEvent, value: unknown) => void;
      });

const AsyncAutoComplete = <
  T,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>(
  props: TAsyncAutoCompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => {
  const { inputKind, customOnChange, ...restProps } = props;

  const {
    baseSearchParams,
    dataLoadingMode,
    fetch,
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

  const [isListOpen, setIsListOpen] = useState(false);

  const { options, hasMore, loading, setSearchValue, loadNextPage } =
    useAsyncAutoComplete({
      fetch,
      dataLoadingMode,
      baseSearchParams,
      debounceMs,
      perPage,
      isListOpen
    });

  const { onScroll, restoreScrollPosition, setListboxRef } = useInfiniteScroll({
    hasMore,
    loading,
    onLoadMore: loadNextPage
  });

  const handleListOpen = useCallback(() => {
    setIsListOpen(true);
  }, []);

  const handleListClose = useCallback(() => {
    setIsListOpen(false);
  }, []);

  const handleInputChange = useCallback<
    NonNullable<TAsyncAutoCompleteProps<T>['onInputChange']>
  >(
    (e, value, reason) => {
      setSearchValue(value ?? '');
      if (muiProps.onInputChange) {
        muiProps.onInputChange(e, value, reason);
      }
    },
    [muiProps, setSearchValue]
  );

  const handleChange = useCallback(
    (
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
    },
    [customOnChange, fieldName, inputKind, muiProps]
  );

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
  };

  const renderOption = useCallback(
    (props: React.HTMLAttributes<HTMLLIElement>, option: T) => {
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
      const labelText = getOptionLabel
        ? getOptionLabel(option)
        : String(option);
      return (
        <Box component='li' key={explicitKey} {...restProps}>
          {labelText}
        </Box>
      );
    },
    [getId, renderCard, getOptionLabel]
  );

  const isOptionEqualToValue = useCallback(
    (option: T, value: T) => {
      if (getId) {
        return getId(option) === getId(value);
      }
      return option === value;
    },
    [getId]
  );

  useEffect(() => {
    restoreScrollPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const isYup = useMemo<boolean>(() => {
    return inputKind === 'yup';
  }, [inputKind]);

  return (
    <Autocomplete
      {...muiProps}
      multiple={multiple}
      freeSolo={freeSolo}
      open={isListOpen}
      onOpen={handleListOpen}
      onClose={handleListClose}
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
          ref: setListboxRef,
          onScroll,
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
                    {loading ? <CircularProgress size={20} /> : null}
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
};

export default AsyncAutoComplete;
