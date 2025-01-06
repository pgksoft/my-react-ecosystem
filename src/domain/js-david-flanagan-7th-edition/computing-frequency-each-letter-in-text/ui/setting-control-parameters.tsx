import React, { FC, useContext } from 'react';
import {
  Box,
  MenuItem,
  Paper,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';
import NumbersIcon from '@mui/icons-material/Numbers';
import { ComputesFrequencyEachLetterInTextContext } from '../context/computes-frequency-each-letter-in-text-context';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../const/titles';

const precisions = [2, 3, 4, 5, 6, 7];

const sxBox = { display: 'flex', alignItems: 'center', p: '2%' };

const SettingControlParameters: FC = () => {
  const {
    measurementYAxis,
    handleMeasurementYAxis,
    precision,
    handleChangePrecision
  } = useContext(ComputesFrequencyEachLetterInTextContext);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', p: '1%' }}>
      <Box sx={sxBox}>
        <Typography sx={{ paddingRight: 0.5 }}>
          {`${TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.yAxis}:`}
        </Typography>
        <ToggleButtonGroup
          value={measurementYAxis}
          exclusive
          onChange={handleMeasurementYAxis}
        >
          <ToggleButton value='%'>
            <PercentIcon />
          </ToggleButton>
          <ToggleButton value='#'>
            <NumbersIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={sxBox}>
        <Typography sx={{ paddingRight: 0.5 }}>
          {`${TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.precision}:`}
        </Typography>
        <Select
          value={`${precision}`}
          onChange={handleChangePrecision}
          variant='standard'
        >
          {precisions.map((value) => {
            return (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Paper>
  );
};

export default SettingControlParameters;
