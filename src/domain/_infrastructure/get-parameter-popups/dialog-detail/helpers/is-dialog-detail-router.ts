import choicePopupDetail from '../const/choice-popup-detail';
import TDialogDetailRoute from '../t-choice-popup-detail/t-dialog-detail-route';

const isDialogDetailRouter = (value: string): value is TDialogDetailRoute => {
  return Object.keys(choicePopupDetail).includes(value);
};

export default isDialogDetailRouter;
