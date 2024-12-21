/* eslint-disable prettier/prettier */
import { createContext } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { TDataCharts } from './types/types';

type TComputesFrequencyEachLetterInTextContext = {
  precision: number;
  setPrecision: (precision: number) => void;
  dataCharts: TDataCharts;
  setDataCharts: (dataCharts: TDataCharts) => void;
  pageOfDataCharts: TDataCharts;
  setPageOfDataCharts: (pageOfDataCharts: TDataCharts) => void;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  handleChangePrecision: (event: SelectChangeEvent) => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const initComputesFrequencyEachLetterInTextContext: TComputesFrequencyEachLetterInTextContext = {
  precision: 2,
  setPrecision: () => {},
  dataCharts: null,
  setDataCharts: () => {},
  pageOfDataCharts: null,
  setPageOfDataCharts: () => {},
  page: 0,
  setPage: () => {},
  rowsPerPage: 10,
  setRowsPerPage: () => {},
  handleChangePrecision: () => {},
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {}
};

export const ComputesFrequencyEachLetterInTextContext = createContext<
  TComputesFrequencyEachLetterInTextContext
>(initComputesFrequencyEachLetterInTextContext);
