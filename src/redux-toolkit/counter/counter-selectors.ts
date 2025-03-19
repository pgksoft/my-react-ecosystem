import { TStoreState } from '../../store/store';

const counterValueSelector = (state: TStoreState) => {
  return state.counter.value;
};

const counterAmountSelector = (state: TStoreState) => {
  return state.counter.amount;
};

export { counterValueSelector, counterAmountSelector };
