/* eslint-disable prettier/prettier */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { uk } from 'date-fns/locale';
import useGetPathAndQuery from '../../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import toISOStringLocaleTime from '../../../../../../app-helpers/to-iso-string-locale-time';
import { TColumnDateSearch } from '../../../../../table-types/t-column-schemas';
import { TITLES_BUILD_TABLE } from '../../../../../const/title';
import TEntityNameKeys from '../../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import useEntitySearchParamsInLocalStorage from '../../../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import SearchConfirm from './ui/search-confirm';
import { omitKeys } from '../../../../../../app-helpers/omit-keys';
import { getIsoTwoDate } from './search-helpers/get-iso-two-date';

export type IDateSearch = {
  entityNameKey: TEntityNameKeys;
  dataKey: string;
  inDateValue: TColumnDateSearch;
  text: string;
  handleClose: () => void;
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    dataTimePicker: {
      width: '300px',
      paddingRight: '14px'
    }
  });
});

export const SearchDate: React.FC<IDateSearch> = ({
  entityNameKey,
  dataKey,
  inDateValue,
  text,
  handleClose
}) => {
  const classes = useStyles();

  const isHandle = useRef<boolean>(false);

  const { getSearchParam, setSearchParam, removeSearchParam } =
    useEntitySearchParamsInLocalStorage(entityNameKey, dataKey);

  const searchParam = getSearchParam<TColumnDateSearch>();

  const initFromDate = useRef(
    (inDateValue.fromDate && new Date(inDateValue.fromDate)) ||
      (searchParam?.fromDate && new Date(searchParam.fromDate)) ||
      null
  );

  const initToDate = useRef(
    (inDateValue.toDate && new Date(inDateValue.toDate)) ||
      (searchParam?.toDate && new Date(searchParam.toDate)) ||
      null
  );

  const [fromDate, setFromDate] = useState<Date | null>(initFromDate.current);
  const [toDate, setToDate] = useState<Date | null>(initToDate.current);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname, query } = useGetPathAndQuery();

  const fromDataKey = useMemo(() => {
    return `${dataKey}[gt]`;
  }, [dataKey]);
  const toDataKey = useMemo(() => {
    return `${dataKey}[lt]`;
  }, [dataKey]);

  const fromDateChange = (date: unknown) => {
    if (date === null || date instanceof Date) {
      setFromDate(date);
    }
  };
  const toDateChange = (date: unknown) => {
    if (date === null || date instanceof Date) {
      setToDate(date);
    }
  };

  const confirmHandle = () => {
    let paramFromDate = {};
    let paramToDate = {};
    let columnDateSearch: TColumnDateSearch = {
      fromDate: null,
      toDate: null
    };
    if (fromDate) {
      const isoFromDate = toISOStringLocaleTime(fromDate);
      paramFromDate = {
        [fromDataKey]: isoFromDate
      };
      columnDateSearch = {
        ...columnDateSearch,
        fromDate: isoFromDate
      };
    } else {
      delete query[fromDataKey];
    }
    if (toDate) {
      const isoToDate = toISOStringLocaleTime(toDate);
      paramToDate = {
        [toDataKey]: isoToDate
      };
      columnDateSearch = { ...columnDateSearch, toDate: isoToDate };
    } else {
      delete query[toDataKey];
    }
    const getParameters = {
      ...query,
      ...paramFromDate,
      ...paramToDate
      // page: '1'
    };
    setSearchParam(columnDateSearch);
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = true;
    navigate(url);
  };

  const clearHandle = () => {
    removeSearchParam();
    const getParameters = omitKeys(query, [fromDataKey, toDataKey]);
    const url = buildQueryString(pathname, getParameters);
    isHandle.current = true;
    navigate(url);
  };

  const disableConfirm = useCallback((): boolean => {
    return (
      (!fromDate && !toDate) ||
      (fromDate && toDate && fromDate > toDate) ||
      (fromDate === initFromDate.current && toDate === initToDate.current)
    );
  }, [fromDate, toDate]);

  const disableClear = useCallback((): boolean => {
    return !initFromDate.current && !initToDate.current;
  }, []);

  useEffect(() => {
    if (!isHandle.current) return;

    const newISOFromDate = query[fromDataKey];
    const newISOToDate = query[toDataKey];
    const initISOFromDate =
      (initFromDate.current && toISOStringLocaleTime(initFromDate.current)) ||
      '';
    const initISOToDate =
      (initToDate.current && toISOStringLocaleTime(initToDate.current)) || '';
    const newISODate = getIsoTwoDate(newISOFromDate, newISOToDate);
    const initISODate = getIsoTwoDate(initISOFromDate, initISOToDate);

    const isReadyToMutation =
      (!!initISODate && !newISODate) ||
      (!!newISODate && !initISODate) ||
      (!!initISODate && !!newISODate && initISODate !== newISODate);
    if (isReadyToMutation) {
      isHandle.current = false;
      appDispatch(setMutationEntity([entityNameKey, 'yes']));
      handleClose();
    }
  }, [appDispatch, entityNameKey, fromDataKey, handleClose, query, toDataKey]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box>
        <Typography align='center' component='h5'>
          {`${TITLES_BUILD_TABLE.searchLabel} ${text.toLowerCase()}`}
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
            value={fromDate}
            onChange={fromDateChange}
            label={TITLES_BUILD_TABLE.searchAfter}
            format='dd.MM.yyyy HH:mm'
            maxDate={toDate === null ? new Date() : toDate}
            slotProps={{ field: { clearable: true } }}
          />
          <DateTimePicker
            className={classes.dataTimePicker}
            ampm={false}
            minDate={fromDate === null ? new Date('01.01.2000') : fromDate}
            disableFuture
            value={toDate}
            onChange={toDateChange}
            label={TITLES_BUILD_TABLE.searchBefore}
            format='dd.MM.yyyy HH:mm'
            slotProps={{ field: { clearable: true } }}
          />
        </LocalizationProvider>
      </Box>
      <SearchConfirm
        disabledConfirm={disableConfirm()}
        onConfirm={confirmHandle}
        disabledClear={disableClear()}
        onClear={clearHandle}
      />
    </Box>
  );
};
