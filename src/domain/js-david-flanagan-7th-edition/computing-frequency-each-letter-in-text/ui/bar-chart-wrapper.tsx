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
  const { dataCharts } = useContext(ComputesFrequencyEachLetterInTextContext);
  return (
    <>
      {dataCharts && (
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={dataCharts}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' interval='preserveStartEnd' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='percent'>
              {dataCharts.map((index) => {
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
