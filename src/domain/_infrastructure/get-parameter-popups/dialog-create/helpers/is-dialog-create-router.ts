import choicePopupCreate from '../const/choice-popup-create';
import TDialogCreateRoute from '../t-choice-popup-create/t-dialog-create-route';

const isDialogCreateRouter = (value: string): value is TDialogCreateRoute => {
  return Object.keys(choicePopupCreate).includes(value);
};

export default isDialogCreateRouter;
