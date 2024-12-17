import React, { FC, ReactNode, useState } from 'react';
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

  return (
    <ComputesFrequencyEachLetterInTextContext.Provider
      value={{ dataCharts, setDataCharts }}
    >
      {children}
    </ComputesFrequencyEachLetterInTextContext.Provider>
  );
};
