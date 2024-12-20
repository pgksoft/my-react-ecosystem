import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  ComputesFrequencyEachLetterInTextContext,
  initComputesFrequencyEachLetterInTextContext
} from '../context/computes-frequency-each-letter-in-text-context/computes-frequency-each-letter-in-text-context';

type TContextProviderProps = { children: ReactNode };

// eslint-disable-next-line prettier/prettier
export const ComputesFrequencyEachLetterInTextContextProvider: FC<TContextProviderProps> = ({
  children
}) => {
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
        dataCharts,
        setDataCharts,
        pageOfDataCharts,
        setPageOfDataCharts,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage
      }}
    >
      {children}
    </ComputesFrequencyEachLetterInTextContext.Provider>
  );
};
