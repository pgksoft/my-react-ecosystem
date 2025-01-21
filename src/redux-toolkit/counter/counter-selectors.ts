import { TRootState } from '../../store/store';

const countSelect = (state: TRootState) => {
  return state.counter.value;
};

const amountSelect = (state: TRootState) => {
  return state.counter.amount;
};

export { countSelect, amountSelect };
