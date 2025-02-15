import React, { FC, useContext } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ComputesFrequencyEachLetterInTextContext } from '../context/computes-frequency-each-letter-in-text-context';
import getRandomColor from '../../../_infrastructure/helpers/get-random-color';
import { TKeyDataCharts } from '../context/types/types';

const BarCharWrapper: FC = () => {
  const { pageOfDataCharts, precision, measurementYAxis } = useContext(
    ComputesFrequencyEachLetterInTextContext
  );

  const dataKey: TKeyDataCharts =
    (measurementYAxis === '%' && 'percent') || 'count';

  return (
    <>
      {pageOfDataCharts && (
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={pageOfDataCharts}
            margin={{
              top: 30 + (precision - 1) * precision
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' interval='preserveStartEnd' />
            <YAxis
              label={{
                value: measurementYAxis,
                position: 'insideTopLeft',
                fontWeight: '600',
                fontSize: '1.5rem'
              }}
            />
            <Tooltip />
            <Bar
              dataKey={dataKey}
              label={{
                position: 'top',
                fontSize: '0.8rem',
                angle: -90,
                dy: -7 - precision * 3.5
              }}
            >
              {pageOfDataCharts.map((index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={getRandomColor()}
                    stroke='gray'
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default BarCharWrapper;
