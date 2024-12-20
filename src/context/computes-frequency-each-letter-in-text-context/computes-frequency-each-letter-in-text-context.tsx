/* eslint-disable prettier/prettier */
import { createContext } from 'react';
import { TDataCharts } from './types/types';

type TComputesFrequencyEachLetterInTextContext = {
  dataCharts: TDataCharts;
  setDataCharts: (dataCharts: TDataCharts) => void;
  pageOfDataCharts: TDataCharts;
  setPageOfDataCharts: (pageOfDataCharts: TDataCharts) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const initComputesFrequencyEachLetterInTextContext: TComputesFrequencyEachLetterInTextContext = {
  dataCharts: null,
  setDataCharts: () => {},
  pageOfDataCharts: null,
  setPageOfDataCharts: () => {},
  page: 0,
  setPage: () => {},
  rowsPerPage: 10,
  setRowsPerPage: () => {},
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {}
};

export const ComputesFrequencyEachLetterInTextContext = createContext<
  TComputesFrequencyEachLetterInTextContext
>(initComputesFrequencyEachLetterInTextContext);
