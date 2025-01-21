import React, { FC } from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import Looks6OutlinedIcon from '@mui/icons-material/Looks6Outlined';
import TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER from '../const/titles';
import { changeAmount } from '../../../../../redux-toolkit/counter/counter-slice';
import useAppSelector from '../../../../../store/use-app-selector';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import { amountSelect } from '../../../../../redux-toolkit/counter/counter-selectors';
import { TAmount } from '../types/types';

const sxItem = { alignSelf: 'center', p: '2%' };

const AmountSelect: FC = () => {
  const appDispatch = useAppDispatch();
  const amountValue = useAppSelector(amountSelect);

  const handleAmount = (
    event: React.MouseEvent<HTMLElement>,
    newAmount: TAmount
  ) => {
    appDispatch(changeAmount(newAmount));
  };

  return (
    <>
      <Typography variant='body2' sx={{ ...sxItem, pb: 0 }}>
        {TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.selectAmount}
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={amountValue}
        onChange={handleAmount}
        sx={{ ...sxItem, pt: 0 }}
      >
        <ToggleButton value={2}>
          <LooksTwoOutlinedIcon />
        </ToggleButton>
        <ToggleButton value={3}>
          <Looks3OutlinedIcon />
        </ToggleButton>
        <ToggleButton value={4}>
          <Looks4OutlinedIcon />
        </ToggleButton>
        <ToggleButton value={5}>
          <Looks5OutlinedIcon />
        </ToggleButton>
        <ToggleButton value={6}>
          <Looks6OutlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default AmountSelect;
