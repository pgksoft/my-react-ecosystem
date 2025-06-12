/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import TDialogCreateRoute from '../../domain/_infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/t-dialog-create-route';
import TDialogDetailRoute from '../../domain/_infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-dialog-detail-route';
import isDialogCreateRouter from '../../domain/_infrastructure/get-parameter-popups/dialog-create/helpers/is-dialog-create-router';
import isDialogDetailRouter from '../../domain/_infrastructure/get-parameter-popups/dialog-detail/helpers/is-dialog-detail-router';
import {
  entityNameKeysList,
  isEntityNameKeys
} from '../../domain/_infrastructure/api-platform/app-entities/helpers/entity-name-key-list';
import { DIALOG_CREATE_ROUTES } from '../../domain/_infrastructure/get-parameter-popups';
import DIALOG_DETAIL_ROUTES from '../../domain/_infrastructure/get-parameter-popups/dialog-detail/const/dialog-detail-routes';

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
      const dialogCreateRoute = DIALOG_CREATE_ROUTES[entityNameKey];
      if (dialogCreateRoute) {
        initialEntityDialogsFields = {
          ...initialEntityDialogsFields,
          [`${dialogCreateRoute}`]: null
        };
      }
      const dialogDetailRoute = DIALOG_DETAIL_ROUTES[entityNameKey];
      if (dialogDetailRoute) {
        initialEntityDialogsFields = {
          ...initialEntityDialogsFields,
          [`${dialogDetailRoute}`]: null
        };
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
