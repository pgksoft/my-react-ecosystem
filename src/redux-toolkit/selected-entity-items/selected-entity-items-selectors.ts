import { TStoreState } from '../../store/store';

const selectedEntityItemsSelector = (state: TStoreState) => {
  return state.selectedEntityItems.selectedEntityItems;
};

export { selectedEntityItemsSelector };
