/* eslint-disable prettier/prettier */
import { createContext } from 'react';
import { TDataCharts } from './types/types';

type TComputesFrequencyEachLetterInTextContext = {
  dataCharts: TDataCharts;
  setDataCharts: (dataCharts: TDataCharts) => void;
};

export const initComputesFrequencyEachLetterInTextContext: TComputesFrequencyEachLetterInTextContext = {
  dataCharts: [],
  setDataCharts: () => {}
};

export const ComputesFrequencyEachLetterInTextContext = createContext<
  TComputesFrequencyEachLetterInTextContext
>(initComputesFrequencyEachLetterInTextContext);
