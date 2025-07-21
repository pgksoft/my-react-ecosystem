import DIALOG_DETAIL_ROUTES from '../const/dialog-detail-routes';
import TDialogDetailRoute from '../t-choice-popup-detail/t-dialog-detail-route';

const isDialogDetailRouter = (value: string): value is TDialogDetailRoute => {
  return Object.values(DIALOG_DETAIL_ROUTES).includes(
    value as TDialogDetailRoute
  );
};

export default isDialogDetailRouter;
