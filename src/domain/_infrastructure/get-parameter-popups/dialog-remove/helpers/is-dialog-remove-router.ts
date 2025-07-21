import TypeGuard from '../../../types/type-guard';
import DIALOG_REMOVE_ROUTES from '../const/dialog-remove-routes';
import TDialogRemoveRoute from '../t-choice-popup-remove/t-dialog-remove-route';

const isDialogRemoveRouter: TypeGuard<TDialogRemoveRoute> = (
  value: unknown
): value is TDialogRemoveRoute => {
  return Object.values(DIALOG_REMOVE_ROUTES).includes(
    value as TDialogRemoveRoute
  );
};

export default isDialogRemoveRouter;
