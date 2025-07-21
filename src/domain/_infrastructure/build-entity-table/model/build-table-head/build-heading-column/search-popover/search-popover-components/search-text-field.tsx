import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import useGetParameter from '../../../../../../../../_hooks/get-parameter.hooks/get-parameter.hook';
import useBuildUrl from '../../../../../../../../_hooks/get-parameter.hooks/build-url.hook';
import useGetPathAndQuery from '../../../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import TextFieldInput from '../../../../../../ui/text-field-input/text-field-input';
import { sliceText } from '../../../../../../helpers/slice-text';
import { TITLES_BUILD_TABLE } from '../../../../../const/title';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    textField: {
      width: '300px'
    }
  });
});

type ISearchTextField = {
  inValue: string;
  dataKey: string;
  text: string;
};

export const SearchTextField: React.FC<ISearchTextField> = ({
  inValue,
  dataKey,
  text
}: ISearchTextField) => {
  const classes = useStyles();

  const label = `${TITLES_BUILD_TABLE.find} "${sliceText(
    text.toLowerCase(),
    25
  )}"`;
  const [getParameter] = useGetParameter(dataKey);
  const initValue = inValue || getParameter || '';
  const [value, setValue] = useState<ISearchTextField['inValue']>(initValue);
  const navigate = useNavigate();
  const getParameters = { [dataKey]: value };
  const { pathname, query } = useGetPathAndQuery(getParameters);
  const urlWithoutGetParameter = useBuildUrl({
    getParameters: {},
    withoutParameters: [dataKey]
  });
  const val = useRef<string>();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    val.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      if (val.current !== '') {
        const getParameters = {
          ...query,
          [dataKey]: val.current,
          page: '1'
        };
        const url = buildQueryString(pathname, getParameters);
        navigate(url);
      } else {
        navigate(urlWithoutGetParameter);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextFieldInput
      inputKind='mui'
      className={classes.textField}
      label={label}
      value={value}
      customOnChange={onInput}
    />
  );
};
