import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import Looks6OutlinedIcon from '@mui/icons-material/Looks6Outlined';
import { useStylesDialog } from '../../../../infrastructure/ui/style/style-dialog';
import { DefaultButton } from '../../../../infrastructure/ui/default-button/default-button';
import TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER from '../const/titles';
import { TAmount } from '../types/types';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} from '../../../../../redux/counter/counterSlice';
import { RootState } from '../../../../../store/store';

const sxItem = { alignSelf: 'center', p: '2%' };

const ReduxPracticeCounterDetail: FC = () => {
  const classes = useStylesDialog();

  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => {
    return state.counter.value;
  });

  const [amount, setAmount] = useState<TAmount>(2);

  const handleAmount = (
    event: React.MouseEvent<HTMLElement>,
    newAmount: TAmount
  ) => {
    setAmount(newAmount);
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(amount));
  };

  return (
    <Box className={classes.rootPopupDialog}>
      <Box className={classes.boxContainer}>
        <Typography variant='h6' sx={{ ...sxItem }}>
          {`${TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.counter}:
          ${counterValue}`}
        </Typography>
        <Typography variant='body2' sx={{ ...sxItem, pb: 0 }}>
          {
            TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.selectAmount
          }
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={amount}
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
        <Box className={classes.boxFooter} sx={{ button: { mb: '2%' } }}>
          <DefaultButton onClick={handleIncrement}>
            {TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.increment}
          </DefaultButton>
          <DefaultButton onClick={handleDecrement}>
            {TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.decrement}
          </DefaultButton>
          <DefaultButton onClick={handleIncrementByAmount}>
            {
              TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.incrementByAmount
            }
          </DefaultButton>
          <DefaultButton onClick={handleDecrementByAmount}>
            {
              TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.decrementByAmount
            }
          </DefaultButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ReduxPracticeCounterDetail;
