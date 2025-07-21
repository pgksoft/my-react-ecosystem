import { TStoreState } from '../../store/store';

const isToResetSelector = (state: TStoreState) => {
  return state.resetToInitialData.isToReset;
};

const isCanResetSelector = (state: TStoreState) => {
  return state.resetToInitialData.isCanReset;
};

export { isToResetSelector, isCanResetSelector };
