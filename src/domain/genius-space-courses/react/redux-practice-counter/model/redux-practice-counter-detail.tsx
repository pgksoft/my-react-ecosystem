import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useStylesDialog } from '../../../../_infrastructure/ui/style/style-dialog';
import { DefaultButton } from '../../../../_infrastructure/ui/default-button/default-button';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} from '../../../../../redux-toolkit/counter/counter-slice';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import useAppSelector from '../../../../../store/use-app-selector';
import {
  countSelect,
  amountSelect
} from '../../../../../redux-toolkit/counter/counter-selectors';
import AmountSelect from '../ui/amount-select';
import TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER from '../const/titles';

const sxItem = { alignSelf: 'center', p: '2%' };

const ReduxPracticeCounterDetail: FC = () => {
  const classes = useStylesDialog();

  const appDispatch = useAppDispatch();
  const counterValue = useAppSelector(countSelect);
  const amountValue = useAppSelector(amountSelect);

  const handleIncrement = () => {
    appDispatch(increment());
  };
  const handleDecrement = () => {
    appDispatch(decrement());
  };
  const handleIncrementByAmount = () => {
    appDispatch(incrementByAmount(amountValue));
  };
  const handleDecrementByAmount = () => {
    appDispatch(decrementByAmount(amountValue));
  };

  return (
    <Box className={classes.rootPopupDialog}>
      <Box className={classes.boxContainer}>
        <Typography variant='h6' sx={{ ...sxItem }}>
          {`${TITLES_GENIUS_SPACE_COURSES_REACT_REDUX_PRACTICE_COUNTER.counter}:
          ${counterValue}`}
        </Typography>
        <AmountSelect />
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
