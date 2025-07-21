import { PayloadAction } from '@reduxjs/toolkit';
import TEntityNameKeys from '../../domain/_infrastructure/api-platform/app-entities/app-entities-types/t-entity-key-names';
import { entityNameKeysList } from '../../domain/_infrastructure/api-platform/app-entities/helpers/entity-name-key-list';

export type TFlagMutation = 'yes' | 'no';

export type TMutationEntities = Partial<Record<TEntityNameKeys, TFlagMutation>>;

export type TMutationEntityState = { mutationEntities: TMutationEntities };

const getInitialTablesEntitiesBuilt = (): TMutationEntities => {
  let initialMutationEntities: TMutationEntities = {};
  entityNameKeysList.forEach((entityNameKey) => {
    initialMutationEntities = {
      ...initialMutationEntities,
      [`${entityNameKey}`]: 'yes'
    };
  });
  return initialMutationEntities;
};

export const initialMutationEntitiesState: TMutationEntityState = {
  mutationEntities: getInitialTablesEntitiesBuilt()
};

const setMutationEntityAction = (
  state: TMutationEntityState,
  action: PayloadAction<[TEntityNameKeys, TFlagMutation]>
) => {
  const [entityNameKey, flagMutation] = action.payload;
  state.mutationEntities[entityNameKey] = flagMutation;
};

const clearMutationEntityAction = (
  state: TMutationEntityState,
  action: PayloadAction<TEntityNameKeys>
) => {
  const entityNameKey = action.payload;
  delete state.mutationEntities[entityNameKey];
};

export { setMutationEntityAction, clearMutationEntityAction };
