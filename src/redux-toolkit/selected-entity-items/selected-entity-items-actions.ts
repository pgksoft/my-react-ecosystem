/* eslint-disable prettier/prettier */
import { PayloadAction } from '@reduxjs/toolkit';
import { IEntityMember } from '../../domain/_infrastructure/api-platform/app-entities/entity-member/entity-member';
import TEntityNameKeys from '../../domain/_infrastructure/api-platform/app-entities/app-entities-types/t-entity-key-names';
import { entityNameKeysList } from '../../domain/_infrastructure/api-platform/app-entities/helpers/entity-name-key-list';

export type TSelectedEntityItemsMap<T extends IEntityMember> = Partial<
  Record<TEntityNameKeys, T[]>
>;

export type TSelectedEntityItemsState<T extends IEntityMember> = {
  selectedEntityItems: TSelectedEntityItemsMap<T>;
};

const getInitialEntityItemsMap = <
  T extends IEntityMember
>(): TSelectedEntityItemsMap<T> => {
  let initialEntityItemsMap: TSelectedEntityItemsMap<T> = {};
  entityNameKeysList.forEach((entityNameKey) => {
    initialEntityItemsMap = {
      ...initialEntityItemsMap,
      [`${entityNameKey}`]: []
    };
  });
  return initialEntityItemsMap;
};

export const initialSelectedEntityItemsState: TSelectedEntityItemsState<IEntityMember> = {
  selectedEntityItems: getInitialEntityItemsMap()
};

const setSelectedEntityItemsAction = <T extends IEntityMember>(
  state: TSelectedEntityItemsState<T>,
  action: PayloadAction<[TEntityNameKeys, T[]]>
) => {
  const [entityNameKey, selectedEntityItems] = action.payload;
  state.selectedEntityItems[entityNameKey] = selectedEntityItems;
};

const clearSelectedEntityItemsAction = <T extends IEntityMember>(
  state: TSelectedEntityItemsState<T>,
  action: PayloadAction<TEntityNameKeys>
) => {
  const entityNameKey = action.payload;
  delete state.selectedEntityItems[entityNameKey];
};

export { setSelectedEntityItemsAction, clearSelectedEntityItemsAction };
