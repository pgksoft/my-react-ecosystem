/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { uk } from 'date-fns/locale';
import useGetParameter from '../../../../../../../../_hooks/get-parameter.hooks/get-parameter.hook';
import useBuildQuery from '../../../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import toISOStringLocaleTime from '../../../../../../helpers/to-iso-string-locale-time';
import { TColumnDateSearch } from '../../../../../table-types/t-column-schemas';
import { TITLES_BUILD_TABLE } from '../../../../../const/title';

type IDateSearch = {
  dataKey: string;
  inDateValue: TColumnDateSearch;
  text: string;
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    dataTimePicker: {
      width: '300px',
      paddingRight: '14px'
    },
    box: {
      display: 'flex'
    }
  });
});

export const SearchDate: React.FC<IDateSearch> = ({
  dataKey,
  inDateValue,
  text
}) => {
  const classes = useStyles();
  const textLabel = `${TITLES_BUILD_TABLE.searchLabel} ${text.toLowerCase()}`;
  const beforeDateKey = `${dataKey}[before]`;
  const afterDateKey = `${dataKey}[after]`;
  const [getParameterBeforeDate] = useGetParameter(`${beforeDateKey}`);
  const [getParameterAfterDate] = useGetParameter(`${afterDateKey}`);

  const initBeforeDateValue = !getParameterBeforeDate
    ? inDateValue.beforeCreateDate
    : new Date(getParameterBeforeDate);

  const initAfterDateValue = !getParameterAfterDate
    ? inDateValue.afterCreateDate
    : new Date(getParameterAfterDate);

  const [
    selectedBeforeCreateDate,
    setSelectedBeforeCreateDate
  ] = useState<Date | null>(initBeforeDateValue);
  const [
    selectedAfterCreateDate,
    setSelectedAfterCreateDate
  ] = useState<Date | null>(initAfterDateValue);

  const navigate = useNavigate();

  const getParameters = {
    [beforeDateKey]: toISOStringLocaleTime(selectedBeforeCreateDate),
    [afterDateKey]: toISOStringLocaleTime(selectedAfterCreateDate)
  };
  const { pathname, query } = useBuildQuery(getParameters);

  const valBefore = useRef<string>();
  const valAfter = useRef<string>();

  const DateBeforeChange = (date: unknown) => {
    if (date === null || date instanceof Date) {
      setSelectedBeforeCreateDate(date);
    }
  };
  const DateAfterChange = (date: unknown) => {
    if (date === null || date instanceof Date) {
      setSelectedAfterCreateDate(date);
    }
  };

  useEffect(() => {
    valBefore.current = toISOStringLocaleTime(selectedBeforeCreateDate);
    valAfter.current = toISOStringLocaleTime(selectedAfterCreateDate);
  }, [selectedBeforeCreateDate, selectedAfterCreateDate]);

  useEffect(() => {
    return () => {
      let paramBefore = {};
      let paramAfter = {};
      if (valBefore.current) {
        paramBefore = {
          [beforeDateKey]: valBefore.current
        };
      } else {
        delete query[beforeDateKey];
      }
      if (valAfter.current) {
        paramAfter = {
          [afterDateKey]: valAfter.current
        };
      } else {
        delete query[afterDateKey];
      }
      const getParameters = {
        ...query,
        ...paramBefore,
        ...paramAfter,
        page: '1'
      };
      const url = buildQueryString(pathname, getParameters);
      navigate(url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography align='center' component='h5'>
        {textLabel}
      </Typography>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={uk}
        localeText={{
          okButtonLabel: TITLES_BUILD_TABLE.confirmOk,
          cancelButtonLabel: TITLES_BUILD_TABLE.confirmCancel
        }}
      >
        <DateTimePicker
          className={classes.dataTimePicker}
          ampm={false}
          disableFuture
          value={selectedAfterCreateDate}
          onChange={DateAfterChange}
          label={TITLES_BUILD_TABLE.searchAfter}
          format='dd.MM.yyyy HH:mm'
          maxDate={
            selectedBeforeCreateDate === null
              ? new Date()
              : selectedBeforeCreateDate
          }
        />
        <DateTimePicker
          className={classes.dataTimePicker}
          ampm={false}
          minDate={
            selectedAfterCreateDate === null
              ? new Date('01.01.2000')
              : selectedAfterCreateDate
          }
          disableFuture
          value={selectedBeforeCreateDate}
          onChange={DateBeforeChange}
          label={TITLES_BUILD_TABLE.searchBefore}
          format='dd.MM.yyyy HH:mm'
        />
      </LocalizationProvider>
    </Box>
  );
};
