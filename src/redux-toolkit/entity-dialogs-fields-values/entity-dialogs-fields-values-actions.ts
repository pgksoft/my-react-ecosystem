/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import {
  entityNameKeysList,
  isEntityNameKeys
} from '../../app-infrastructure/api-platform/app-entities/helpers/entity-name-key-list';
import { LIST_DIALOG_CREATE_ROUTES } from '../../app-infrastructure/get-parameter-popups';
import LIST_DIALOG_DETAIL_ROUTES, {
  isDialogDetailKey,
  isDialogDetailRouter,
  type TDialogDetailRoute
} from '../../app-infrastructure/get-parameter-popups/dialog-detail/const/dialog-detail-routes';
import {
  isDialogCreateKey,
  isDialogCreateRouter,
  type TDialogCreateRoute
} from '../../app-infrastructure/get-parameter-popups/dialog-create/const/dialog-create-routes';

export type TEntityDialogsFieldsKey = TDialogCreateRoute | TDialogDetailRoute;

type TRestoredDialogFields = string | null;

export type TEntityDialogsFields = Partial<
  Record<TEntityDialogsFieldsKey, TRestoredDialogFields>
>;

export type TEntityDialogsFieldsState = {
  entityDialogsFields: TEntityDialogsFields;
};

const setEntityDialogsFieldsAction = (
  state: TEntityDialogsFieldsState,
  action: PayloadAction<[TEntityDialogsFieldsKey, object]>
) => {
  const [entityDialogsFieldsKey, dto] = action.payload;
  state.entityDialogsFields[entityDialogsFieldsKey] = JSON.stringify(dto);
};

const clearEntityDialogsFieldsAction = (
  state: TEntityDialogsFieldsState,
  action: PayloadAction<TEntityDialogsFieldsKey>
) => {
  state.entityDialogsFields[action.payload] = null;
};

export { setEntityDialogsFieldsAction, clearEntityDialogsFieldsAction };

// helpers
const getInitialEntityDialogsFields = (): TEntityDialogsFields => {
  let initialEntityDialogsFields: TEntityDialogsFields = {};
  entityNameKeysList.forEach((entityNameKey) => {
    if (isEntityNameKeys(entityNameKey)) {
      if (isDialogCreateKey(entityNameKey)) {
        const dialogCreateRoute = LIST_DIALOG_CREATE_ROUTES[entityNameKey];
        if (dialogCreateRoute) {
          initialEntityDialogsFields = {
            ...initialEntityDialogsFields,
            [`${dialogCreateRoute}`]: null
          };
        }
      }
      if (isDialogDetailKey(entityNameKey)) {
        const dialogDetailRoute = LIST_DIALOG_DETAIL_ROUTES[entityNameKey];
        if (dialogDetailRoute) {
          initialEntityDialogsFields = {
            ...initialEntityDialogsFields,
            [`${dialogDetailRoute}`]: null
          };
        }
      }
    }
  });
  return initialEntityDialogsFields;
};

export const initialEntityDialogsFieldsState: TEntityDialogsFieldsState = {
  entityDialogsFields: getInitialEntityDialogsFields()
};

export const isEntityDialogFieldsKey = (
  value: string
): value is TEntityDialogsFieldsKey => {
  return isDialogCreateRouter(value) || isDialogDetailRouter(value);
};
