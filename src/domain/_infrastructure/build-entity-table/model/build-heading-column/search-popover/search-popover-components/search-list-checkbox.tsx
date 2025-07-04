import React, { useEffect, useRef, useState } from 'react';
import { Checkbox, FormControlLabel, FormLabel, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useGetParameter from '../../../../../../../_hooks/get-parameter.hooks/get-parameter.hook';
import useBuildUrl from '../../../../../../../_hooks/get-parameter.hooks/build-url.hook';
import useBuildQuery from '../../../../../../../_hooks/get-parameter.hooks/build-query.hook';
import buildQueryString from '../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { TColumnCheckboxItems } from '../../../../table-types/t-column-schemas';
import { TITLES_BUILD_TABLE } from '../../../../const/title';

interface ISearchListCheckbox {
  dataKey: string;
  inCheckboxes: TColumnCheckboxItems;
  text: string;
}

export const SearchListCheckbox: React.FC<ISearchListCheckbox> = ({
  dataKey,
  inCheckboxes,
  text
}) => {
  const label = `${TITLES_BUILD_TABLE.choose} ${text.toLowerCase()}`;
  const getAllParameters = useGetParameter(`${dataKey}[]`);
  const initValuesCheckbox = inCheckboxes.map(({ key, title }) => {
    if (getAllParameters && getAllParameters.includes(key)) {
      return {
        key,
        title,
        value: true
      };
    }
    return {
      key,
      title,
      value: false
    };
  });

  const [checkboxes, setCheckboxes] =
    useState<TColumnCheckboxItems>(initValuesCheckbox);

  const navigate = useNavigate();

  const getParameters = { [`${dataKey}[]`]: trueValues(checkboxes) };
  const { pathname, query } = useBuildQuery(getParameters);
  const urlWithoutGetParameter = useBuildUrl({}, [`${dataKey}[]`]);
  const val = useRef<string[]>();

  const onChange = (idCheckbox: string) => {
    const changeCheckboxes = checkboxes.map((checkbox) => {
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
    setCheckboxes(changeCheckboxes);
  };

  useEffect(() => {
    val.current = trueValues(checkboxes);
  }, [checkboxes]);

  useEffect(() => {
    return () => {
      if (val.current && val.current.length) {
        const getParameters = {
          ...query,
          [`${dataKey}[]`]: val.current,
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
    <>
      <FormLabel component='legend'>{label}</FormLabel>
      {checkboxes.length ? (
        checkboxes.map(({ key: id, title, value }): JSX.Element => {
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
        })
      ) : (
        <Alert severity='error'>{TITLES_BUILD_TABLE.noDataSearch}</Alert>
      )}
    </>
  );
};

// Helpers
const trueValues = (checkboxes: TColumnCheckboxItems | undefined) => {
  if (!Array.isArray(checkboxes)) {
    return [];
  }
  return checkboxes
    .map(({ value, key: id }) => {
      if (value === true) {
        return id;
      }
      return '';
    })
    .filter((value) => {
      return value;
    });
};
