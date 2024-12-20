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
import { ComputesFrequencyEachLetterInTextContext } from '../../../../context/computes-frequency-each-letter-in-text-context/computes-frequency-each-letter-in-text-context';
import getRandomColor from '../../../infrastructure/utils/get-random-color';

const BarCharWrapper: FC = () => {
  const { pageOfDataCharts } = useContext(
    ComputesFrequencyEachLetterInTextContext
  );

  return (
    <>
      {pageOfDataCharts && (
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={pageOfDataCharts}
            margin={{
              top: 30
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' interval='preserveStartEnd' />
            <YAxis
              label={{
                value: '%',
                position: 'insideTopLeft',
                fontWeight: '600',
                fontSize: '1.5rem'
              }}
            />
            <Tooltip />
            <Bar
              dataKey='percent'
              label={{
                position: 'top',
                fontSize: '0.8rem',
                angle: -90,
                dy: -14
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
