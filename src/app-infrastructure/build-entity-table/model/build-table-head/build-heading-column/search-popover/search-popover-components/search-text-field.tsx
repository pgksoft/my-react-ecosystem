import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import useGetPathAndQuery from '../../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import TextFieldInput from '../../../../../../app-ui/text-field-input/text-field-input';
import { sliceText } from '../../../../../../app-helpers/slice-text';
import { TITLES_BUILD_TABLE } from '../../../../../const/title';
import TEntityNameKeys from '../../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import useEntitySearchParamsInLocalStorage from '../../../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import SearchConfirm from './ui/search-confirm';
import { omitKeys } from '../../../../../../app-helpers/omit-keys';

export type ISearchTextField = {
  entityNameKey: TEntityNameKeys;
  inValue: string;
  dataKey: string;
  text: string;
  handleClose: () => void;
};

export const SearchTextField: React.FC<ISearchTextField> = ({
  entityNameKey,
  inValue,
  dataKey,
  text,
  handleClose
}) => {
  const isHandle = useRef<'confirm' | 'clear' | 'not-handle'>('not-handle');

  const { getSearchParam, setSearchParam, removeSearchParam } =
    useEntitySearchParamsInLocalStorage(entityNameKey, dataKey);

  const initValue = useMemo(() => {
    return inValue || getSearchParam<string>() || '';
  }, [getSearchParam, inValue]);

  const [value, setValue] = useState<ISearchTextField['inValue']>(initValue);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname, query } = useGetPathAndQuery();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const confirmHandle = () => {
    setSearchParam(value);
    const getParameters = {
      ...query,
      [dataKey]: `/${value}/i`
    };
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = 'confirm';
    navigate(url);
  };

  const clearHandle = () => {
    removeSearchParam();
    const getParameters = omitKeys(query, [dataKey]);
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = 'clear';
    navigate(url);
  };

  useEffect(() => {
    if (isHandle.current === 'not-handle') return;

    const newValue = query[dataKey];
    const normInitValue = (initValue && `/${initValue}/i`) || '';
    const isReadyToMutation =
      (!!normInitValue && !newValue) ||
      (!!newValue && !normInitValue) ||
      (!!normInitValue && !!newValue && normInitValue !== newValue);
    if (isReadyToMutation) {
      isHandle.current = 'not-handle';
      appDispatch(setMutationEntity([entityNameKey, 'yes']));
      handleClose();
    }
  }, [appDispatch, dataKey, entityNameKey, handleClose, initValue, query]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TextFieldInput
        sx={{ mr: 1, minWidth: 300 }}
        inputKind='mui'
        label={`${TITLES_BUILD_TABLE.find} "${sliceText(
          text.toLowerCase(),
          25
        )}"`}
        value={value}
        customOnChange={onInput}
        multiline={false}
      />
      <SearchConfirm
        disabledConfirm={!(value !== initValue && !!value)}
        onConfirm={confirmHandle}
        disabledClear={!initValue}
        onClear={clearHandle}
      />
    </Box>
  );
};
