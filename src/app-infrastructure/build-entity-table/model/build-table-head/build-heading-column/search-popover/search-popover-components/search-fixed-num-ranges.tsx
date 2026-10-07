import React, { useEffect, useMemo, useRef, useState, type FC } from 'react';
import type TEntityNameKeys from '../../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type {
  TColumnFixedNumericalRangeItems,
  TColumnFixedRangeNumericalSearch
} from '../../../../../table-types/t-column-schemas';
import {
  Alert,
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import { TITLES_BUILD_TABLE } from '../../../../../const/title';
import useEntitySearchParamsInLocalStorage from '../../../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import useAppDispatch from '../../../../../../../store/use-app-dispatch';
import { useNavigate } from 'react-router-dom';
import useGetPathAndQuery from '../../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { omitKeys } from '../../../../../../app-helpers/omit-keys';
import SearchConfirm from './ui/search-confirm';
import { setMutationEntity } from '../../../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';

export type TFixedNumRangesSearch = {
  entityNameKey: TEntityNameKeys;
  dataKey: string;
  inFixedNumRangesValue: TColumnFixedNumericalRangeItems;
  text: string;
  handleClose: () => void;
};

export const SearchFixedNumRanges: FC<TFixedNumRangesSearch> = ({
  entityNameKey,
  dataKey,
  inFixedNumRangesValue,
  text,
  handleClose
}) => {
  const isHandle = useRef<boolean>(false);

  const { getSearchParam, setSearchParam, removeSearchParam } =
    useEntitySearchParamsInLocalStorage(entityNameKey, dataKey);

  const initValue = useRef(
    getSearchParam<TColumnFixedRangeNumericalSearch>()?.title ?? ''
  );

  const [value, setValue] = useState<string>(initValue.current);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname, query } = useGetPathAndQuery();

  const fromNumKey = useMemo(() => {
    return `${dataKey}[gte]`;
  }, [dataKey]);
  const toNumKey = useMemo(() => {
    return `${dataKey}[lte]`;
  }, [dataKey]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const confirmHandle = () => {
    const range = inFixedNumRangesValue.find((item) => {
      return item.title === value;
    });
    if (!range) return;
    setSearchParam(range);
    const getParameters = {
      ...query,
      [fromNumKey]: range.fromNum,
      [toNumKey]: range.toNum
    };
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = true;
    navigate(url);
  };

  const clearHandle = () => {
    removeSearchParam();
    const getParameters = omitKeys(query, [fromNumKey, toNumKey]);
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = true;
    navigate(url);
  };

  const disabledConfirm = useMemo((): boolean => {
    return (!initValue.current && !value) || initValue.current === value;
  }, [value]);

  const disabledClear = useMemo((): boolean => {
    return !initValue.current;
  }, []);

  useEffect(() => {
    if (!isHandle.current) return;

    const newFromNumValue = query[fromNumKey];
    const newToNumValue = query[toNumKey];
    const newRangeName =
      (newFromNumValue === undefined && newToNumValue === undefined && '') ||
      inFixedNumRangesValue.find((item) => {
        return (
          item.fromNum === Number(newFromNumValue) &&
          item.toNum === Number(newToNumValue)
        );
      })?.title;

    if (initValue.current !== newRangeName) {
      isHandle.current = false;
      appDispatch(setMutationEntity([entityNameKey, 'yes']));
      handleClose();
    }
  }, [
    entityNameKey,
    inFixedNumRangesValue,
    fromNumKey,
    toNumKey,
    appDispatch,
    handleClose,
    query
  ]);

  return (
    <>
      <FormLabel component='legend'>{`${TITLES_BUILD_TABLE.choose} ${text.toLowerCase()}`}</FormLabel>
      {inFixedNumRangesValue.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <RadioGroup value={value} onChange={handleValueChange}>
            {inFixedNumRangesValue.map(({ title }) => {
              return (
                <FormControlLabel
                  key={title}
                  value={title}
                  label={title}
                  control={<Radio />}
                />
              );
            })}
          </RadioGroup>
          <SearchConfirm
            disabledConfirm={disabledConfirm}
            onConfirm={confirmHandle}
            disabledClear={disabledClear}
            onClear={clearHandle}
            direction='column'
          />
        </Box>
      ) : (
        <Alert severity='error'>{TITLES_BUILD_TABLE.noDataSearch}</Alert>
      )}
    </>
  );
};
