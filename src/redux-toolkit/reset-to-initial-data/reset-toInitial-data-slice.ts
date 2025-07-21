import { createSlice } from '@reduxjs/toolkit';
import {
  changeIsCanResetAction,
  changeIsToResetAction,
  initialCounterState
} from './reset-to-initial-data-actions';

export const resetToInitialDataSlice = createSlice({
  name: 'reset-to-initial-data',
  initialState: initialCounterState,
  reducers: {
    changeIsToReset: changeIsToResetAction,
    changeIsCanReset: changeIsCanResetAction
  }
});

export const { changeIsToReset, changeIsCanReset } =
  resetToInitialDataSlice.actions;

export default resetToInitialDataSlice.reducer;
