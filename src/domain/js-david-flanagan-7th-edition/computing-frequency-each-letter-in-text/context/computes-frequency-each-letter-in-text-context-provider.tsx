import React, { FC, ReactNode, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  ComputesFrequencyEachLetterInTextContext,
  initComputesFrequencyEachLetterInTextContext
} from './computes-frequency-each-letter-in-text-context';

type TContextProviderProps = { children: ReactNode };

// eslint-disable-next-line prettier/prettier
export const ComputesFrequencyEachLetterInTextContextProvider: FC<TContextProviderProps> = ({
  children
}) => {
  const [precision, setPrecision] = useState(
    initComputesFrequencyEachLetterInTextContext.precision
  );
  const [dataCharts, setDataCharts] = useState(
    initComputesFrequencyEachLetterInTextContext.dataCharts
  );
  const [pageOfDataCharts, setPageOfDataCharts] = useState(
    initComputesFrequencyEachLetterInTextContext.pageOfDataCharts
  );
  const [page, setPage] = useState(
    initComputesFrequencyEachLetterInTextContext.page
  );
  const [rowsPerPage, setRowsPerPage] = useState(
    initComputesFrequencyEachLetterInTextContext.rowsPerPage
  );

  const handleChangePrecision = (event: SelectChangeEvent) => {
    setPrecision(Number(event.target.value));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    !dataCharts
      ? setPageOfDataCharts(null)
      : setPageOfDataCharts(
          dataCharts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        );
  }, [dataCharts, page, rowsPerPage]);

  return (
    <ComputesFrequencyEachLetterInTextContext.Provider
      value={{
        precision,
        setPrecision,
        dataCharts,
        setDataCharts,
        pageOfDataCharts,
        setPageOfDataCharts,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        handleChangePrecision,
        handleChangePage,
        handleChangeRowsPerPage
      }}
    >
      {children}
    </ComputesFrequencyEachLetterInTextContext.Provider>
  );
};
