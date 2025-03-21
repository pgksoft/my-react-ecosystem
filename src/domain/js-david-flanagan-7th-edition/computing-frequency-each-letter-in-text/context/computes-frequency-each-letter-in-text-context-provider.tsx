import React, {
  FC,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useDeferredValue
} from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  ComputesFrequencyEachLetterInTextContext,
  initComputesFrequencyEachLetterInTextContext
} from './computes-frequency-each-letter-in-text-context';
import { TMeasurementYAxis } from './types/types';
import ComputesFrequencyEachLetterInText from '../util/computes-frequency-each-letter-in-text';

type TContextProviderProps = { children: ReactNode };

export const ComputesFrequencyEachLetterInTextContextProvider: FC<
  TContextProviderProps
> = ({ children }) => {
  const [text, setText] = useState(
    initComputesFrequencyEachLetterInTextContext.text
  );
  const deferredText = useDeferredValue(text);
  const [measurementYAxis, setMeasurementYAxis] = useState<TMeasurementYAxis>(
    initComputesFrequencyEachLetterInTextContext.measurementYAxis
  );
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

  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    []
  );

  const handleMeasurementYAxis = (
    event: React.MouseEvent<HTMLElement>,
    newMeasurementYAxis: TMeasurementYAxis
  ) => {
    setMeasurementYAxis(newMeasurementYAxis);
  };

  const handleChangePrecision = (event: SelectChangeEvent) => {
    setPrecision(Number(event.target.value));
  };

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    []
  );

  useEffect(() => {
    setDataCharts(ComputesFrequencyEachLetterInText(deferredText, precision));
  }, [deferredText, precision]);

  // This is the chart data definition for the page when paginated
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
        text,
        setText,
        measurementYAxis,
        setMeasurementYAxis,
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
        handleChangeText,
        handleMeasurementYAxis,
        handleChangePrecision,
        handleChangePage,
        handleChangeRowsPerPage
      }}
    >
      {children}
    </ComputesFrequencyEachLetterInTextContext.Provider>
  );
};
