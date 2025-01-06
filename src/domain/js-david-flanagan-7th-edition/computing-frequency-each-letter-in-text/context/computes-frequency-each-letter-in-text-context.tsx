/* eslint-disable prettier/prettier */
import { createContext } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { TDataCharts, TMeasurementYAxis } from './types/types';

type TComputesFrequencyEachLetterInTextContext = {
  text: string;
  setText: (text: string) => void;
  measurementYAxis: TMeasurementYAxis;
  setMeasurementYAxis: (measurementYAxis: TMeasurementYAxis) => void;
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
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMeasurementYAxis: (
    event: React.MouseEvent<HTMLElement>,
    newMeasurementYAxis: TMeasurementYAxis
  ) => void;
  handleChangePrecision: (event: SelectChangeEvent) => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const initComputesFrequencyEachLetterInTextContext: TComputesFrequencyEachLetterInTextContext = {
  text: '',
  setText: () => {},
  measurementYAxis: '%',
  setMeasurementYAxis: () => {},
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
  handleChangeText: () => {},
  handleMeasurementYAxis: () => {},
  handleChangePrecision: () => {},
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {}
};

export const ComputesFrequencyEachLetterInTextContext = createContext<
  TComputesFrequencyEachLetterInTextContext
>(initComputesFrequencyEachLetterInTextContext);
