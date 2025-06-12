/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import TEntityNameKeys from '../../domain/_infrastructure/api-platform/app-entities/app-entities-types/t-entity-key-names';
import { entityNameKeysList } from '../../domain/_infrastructure/api-platform/app-entities/helpers/entity-name-key-list';

type TFlagTableEntityBuilt = 'yes' | 'no';

export type TTablesEntitiesBuilt = Partial<
  Record<TEntityNameKeys, TFlagTableEntityBuilt>
>;

export type TTablesEntitiesBuiltState = {
  tablesEntitiesBuilt: TTablesEntitiesBuilt;
};

const getInitialTablesEntitiesBuilt = (): TTablesEntitiesBuilt => {
  let initialTablesEntitiesBuilt: TTablesEntitiesBuilt = {};
  entityNameKeysList.forEach((entityNameKey) => {
    initialTablesEntitiesBuilt = {
      ...initialTablesEntitiesBuilt,
      [`${entityNameKey}`]: 'no'
    };
  });
  return initialTablesEntitiesBuilt;
};

export const initialTablesEntitiesBuiltState: TTablesEntitiesBuiltState = {
  tablesEntitiesBuilt: getInitialTablesEntitiesBuilt()
};

const setTableEntityBuiltAction = (
  state: TTablesEntitiesBuiltState,
  action: PayloadAction<[TEntityNameKeys, TFlagTableEntityBuilt]>
) => {
  const [entityKey, flag] = action.payload;
  state.tablesEntitiesBuilt[entityKey] = flag;
};

export { setTableEntityBuiltAction };
