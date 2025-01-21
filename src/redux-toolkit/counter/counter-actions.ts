import { PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
export type TCounterState = {
  value: number;
  amount: number;
};

export const initialCounterState: TCounterState = {
  value: 0,
  amount: 2
};

const incrementAction = (state: TCounterState) => {
  state.value += 1;
};

const decrementAction = (state: TCounterState) => {
  state.value -= 1;
};

const incrementByAmountAction = (
  state: TCounterState,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};

const decrementByAmountAction = (
  state: TCounterState,
  action: PayloadAction<number>
) => {
  state.value -= action.payload;
};

const changeAmountAction = (
  state: TCounterState,
  action: PayloadAction<number>
) => {
  state.amount = action.payload;
};

export {
  incrementAction,
  decrementAction,
  incrementByAmountAction,
  decrementByAmountAction,
  changeAmountAction
};
