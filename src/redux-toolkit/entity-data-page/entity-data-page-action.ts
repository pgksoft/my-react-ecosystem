import type { PayloadAction } from '@reduxjs/toolkit';
import type TEntityNameKeys from '../../app-infrastructure/api-platform/app-entities/app-entities-types/t-entity-key-names';
import { entityNameKeysList } from '../../app-infrastructure/api-platform/app-entities/helpers/entity-name-key-list';
import entityMetadataMaps from '../../app-infrastructure/entity-metadata';

export type TEntityDataPageState = Partial<{ [K in TEntityNameKeys]: number }>;

const getInitialEntityDataPage = (): TEntityDataPageState => {
  const initialEntityDataPage: TEntityDataPageState = {};
  entityNameKeysList.forEach((entityNameKey) => {
    const { dataLoadingMode } = entityMetadataMaps[entityNameKey];
    if (dataLoadingMode === 'page') {
      initialEntityDataPage[entityNameKey] = 1;
    }
  });
  return initialEntityDataPage;
};

export const initialEntityDataPageState: TEntityDataPageState =
  getInitialEntityDataPage();

export const setEntityDataPageAction = (
  state: TEntityDataPageState,
  action: PayloadAction<[TEntityNameKeys, number]>
) => {
  const [entityNameKey, page] = action.payload;
  state[entityNameKey] = page;
};
