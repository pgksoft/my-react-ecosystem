/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { entityNameKeysList } from '../../app-infrastructure/api-platform/app-entities/helpers/entity-name-key-list';
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
import type TUnknownRecord from '../../app-infrastructure/app-types/t-unknown-record';

export type TFormDtoKey = TDialogCreateRoute | TDialogDetailRoute;

type TFormDto<T extends TUnknownRecord> = T | null;

export type TFormDtoSerialization<T extends TUnknownRecord> = Partial<
  Record<TFormDtoKey, TFormDto<T>>
>;

export type TFormDtoSerializationState<T extends TUnknownRecord> = {
  formDtoSerialization: TFormDtoSerialization<T>;
};

const setFormDtoSerializationAction = <T extends TUnknownRecord>(
  state: TFormDtoSerializationState<T>,
  action: PayloadAction<[TFormDtoKey, T]>
) => {
  const [formDtoKey, dto] = action.payload;
  state.formDtoSerialization[formDtoKey] = dto;
};

const clearFormDtoSerializationAction = <T extends TUnknownRecord>(
  state: TFormDtoSerializationState<T>,
  action: PayloadAction<TFormDtoKey>
) => {
  state.formDtoSerialization[action.payload] = null;
};

export { setFormDtoSerializationAction, clearFormDtoSerializationAction };

// helpers
const getInitialFormDtoSerialization = <
  T extends TUnknownRecord
>(): TFormDtoSerialization<T> => {
  let initialFormDtoSerialization: TFormDtoSerialization<T> = {};
  entityNameKeysList.forEach((entityNameKey) => {
    if (isDialogCreateKey(entityNameKey)) {
      const dialogCreateRoute = LIST_DIALOG_CREATE_ROUTES[entityNameKey];
      if (dialogCreateRoute) {
        initialFormDtoSerialization = {
          ...initialFormDtoSerialization,
          [`${dialogCreateRoute}`]: null
        };
      }
    }
    if (isDialogDetailKey(entityNameKey)) {
      const dialogDetailRoute = LIST_DIALOG_DETAIL_ROUTES[entityNameKey];
      if (dialogDetailRoute) {
        initialFormDtoSerialization = {
          ...initialFormDtoSerialization,
          [`${dialogDetailRoute}`]: null
        };
      }
    }
  });
  return initialFormDtoSerialization;
};

export const initialFormDtoSerializationState: TFormDtoSerializationState<TUnknownRecord> =
  {
    formDtoSerialization: getInitialFormDtoSerialization<TUnknownRecord>()
  };

export const isFormDtoKey = (value: string): value is TFormDtoKey => {
  return isDialogCreateRouter(value) || isDialogDetailRouter(value);
};
