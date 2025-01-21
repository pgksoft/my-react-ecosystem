import { createSlice } from '@reduxjs/toolkit';
import {
  initialCounterState,
  decrementAction,
  decrementByAmountAction,
  incrementAction,
  incrementByAmountAction,
  changeAmountAction
} from './counter-actions';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
    incrementByAmount: incrementByAmountAction,
    decrementByAmount: decrementByAmountAction,
    changeAmount: changeAmountAction
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  changeAmount
} = counterSlice.actions;

export default counterSlice.reducer;
