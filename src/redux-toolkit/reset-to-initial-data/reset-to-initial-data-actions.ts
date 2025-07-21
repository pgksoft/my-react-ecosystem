import { PayloadAction } from '@reduxjs/toolkit';

export type TResetToInitialDataState = {
  isToReset: boolean;
  isCanReset: boolean;
};
export const initialCounterState: TResetToInitialDataState = {
  isToReset: false,
  isCanReset: false
};

const changeIsToResetAction = (
  state: TResetToInitialDataState,
  action: PayloadAction<boolean>
) => {
  state.isToReset = action.payload;
};

const changeIsCanResetAction = (
  state: TResetToInitialDataState,
  action: PayloadAction<boolean>
) => {
  state.isCanReset = action.payload;
};

export { changeIsToResetAction, changeIsCanResetAction };
