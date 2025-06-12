import { TStoreState } from '../../store/store';

const tableEntityBuiltSelector = (state: TStoreState) => {
  return state.tableEntityBuilt.tablesEntitiesBuilt;
};

export { tableEntityBuiltSelector };
