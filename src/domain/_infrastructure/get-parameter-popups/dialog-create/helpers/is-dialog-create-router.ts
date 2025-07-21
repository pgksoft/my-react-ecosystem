import DIALOG_CREATE_ROUTES from '../const/dialog-create-routes';
import TDialogCreateRoute from '../t-choice-popup-create/t-dialog-create-route';

const isDialogCreateRouter = (value: string): value is TDialogCreateRoute => {
  return Object.values(DIALOG_CREATE_ROUTES).includes(
    value as TDialogCreateRoute
  );
};

export default isDialogCreateRouter;
