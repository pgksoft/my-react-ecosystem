import { TStoreState } from '../../store/store';

const mutationEntitySelector = (state: TStoreState) => {
  return state.mutationEntities.mutationEntities;
};

export { mutationEntitySelector };
