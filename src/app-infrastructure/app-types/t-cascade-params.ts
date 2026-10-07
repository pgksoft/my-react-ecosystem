import type { TGetParameter } from '../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type {
  TPopupFilteredListRoute,
  TPopupListRoute,
  TValueOfListDialogCreateRoutes,
  TValueOfListDialogDetailRoutes
} from '../get-parameter-popups';
import { isDialogCreateRouter } from '../get-parameter-popups/dialog-create/const/dialog-create-routes';
import { isDialogDetailRouter } from '../get-parameter-popups/dialog-detail/const/dialog-detail-routes';
import {
  isPopupListFilteredRouter,
  isPopupListRouter
} from '../get-parameter-popups/dialog-list/const/popup-list-routes';
import type TypeGuard from './type-guard';

export type TReturnPopup =
  | TValueOfListDialogCreateRoutes
  | TValueOfListDialogDetailRoutes
  | TPopupListRoute
  | TPopupFilteredListRoute;

export const isTReturnPopup: TypeGuard<TReturnPopup> = (
  value: unknown
): value is TReturnPopup => {
  return (
    isDialogCreateRouter(value) ||
    isDialogDetailRouter(value) ||
    isPopupListRouter(value) ||
    isPopupListFilteredRouter(value)
  );
};

type TCascadeParams = { returnPopup: TGetParameter };

export default TCascadeParams;
