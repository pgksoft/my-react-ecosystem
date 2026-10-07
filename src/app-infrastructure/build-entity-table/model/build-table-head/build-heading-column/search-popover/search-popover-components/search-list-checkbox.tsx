/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  Alert,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import buildQueryString from '../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { TColumnCheckboxItems } from '../../../../../table-types/t-column-schemas';
import { TITLES_BUILD_TABLE } from '../../../../../const/title';
import getCheckBoxSearchParamValue from './search-helpers/get-checkbox-search-param-value';
import TEntityNameKeys from '../../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import SearchConfirm from './ui/search-confirm';
import useEntitySearchParamsInLocalStorage from '../../../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import { initValuesCheckbox } from './search-helpers/init-values-checkbox';
import useGetPathAndQuery from '../../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import { omitKeys } from '../../../../../../app-helpers/omit-keys';
import { isEqualCheckBoxValues } from './search-helpers/is-equal-checkbox-values';
import { isDefineCheckboxValues } from './search-helpers/is-define-checkbox-values';
import { isEqualStringArrays } from '../../../../../../app-helpers/is-equal-string-arrays';

export type ISearchListCheckbox = {
  entityNameKey: TEntityNameKeys;
  dataKey: string;
  inCheckboxes: TColumnCheckboxItems;
  text: string;
  handleClose: () => void;
};

export const SearchListCheckbox: React.FC<ISearchListCheckbox> = ({
  entityNameKey,
  dataKey,
  inCheckboxes,
  text,
  handleClose
}) => {
  const isHandle = useRef<boolean>(false);

  const searchDataKey = useMemo(() => {
    return `${dataKey}[]` as const;
  }, [dataKey]);

  const { getSearchParam, setSearchParam, removeSearchParam } =
    useEntitySearchParamsInLocalStorage(entityNameKey, dataKey);

  const initCheckBoxes = useRef<TColumnCheckboxItems>(getSearchParam() ?? []);

  const [checkboxes, setCheckboxes] = useState<TColumnCheckboxItems>(
    initValuesCheckbox(inCheckboxes, initCheckBoxes.current)
  );

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname, query } = useGetPathAndQuery();

  const onChange = (idCheckbox: string) => {
    const changedCheckboxes = checkboxes.map((checkbox) => {
      const { key: id, title, value } = checkbox;
      if (id === idCheckbox) {
        return {
          key: id,
          title,
          value: !value
        };
      }
      return checkbox;
    });
    setCheckboxes(changedCheckboxes);
  };

  const confirmHandle = () => {
    setSearchParam(
      checkboxes.filter((item) => {
        return item.value && item;
      })
    );
    const getParameters = {
      ...query,
      [searchDataKey]: getCheckBoxSearchParamValue(checkboxes)
    };
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = true;
    navigate(url);
  };

  const clearHandle = () => {
    removeSearchParam();
    const getParameters = omitKeys(query, [searchDataKey]);
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = true;
    navigate(url);
  };

  const disabledConfirm = useMemo(() => {
    return (
      !isDefineCheckboxValues(checkboxes) ||
      isEqualCheckBoxValues(initCheckBoxes.current, checkboxes)
    );
  }, [checkboxes]);

  const disabledClear = useMemo(() => {
    return !isDefineCheckboxValues(initCheckBoxes.current);
  }, []);

  useEffect(() => {
    if (!isHandle.current) return;

    const newValue = (query[searchDataKey] as string[]) ?? [];
    const initValue = initCheckBoxes.current.map(({ key }) => {
      return key;
    });
    if (!isEqualStringArrays(newValue, initValue)) {
      isHandle.current = false;
      appDispatch(setMutationEntity([entityNameKey, 'yes']));
      handleClose();
    }
  }, [appDispatch, entityNameKey, handleClose, query, searchDataKey]);

  return (
    <>
      <FormLabel component='legend'>{`${TITLES_BUILD_TABLE.choose} ${text.toLowerCase()}`}</FormLabel>
      {checkboxes.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {checkboxes.map(({ key: id, title, value }): JSX.Element => {
            return (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={value}
                    onChange={() => {
                      return onChange(id);
                    }}
                    color='primary'
                  />
                }
                label={title}
              />
            );
          })}
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
