import IPopupCreate from './i-popup-create';
import TDialogCreateRoute from './t-dialog-create-route';

type TChoicePopupCreate = Partial<Record<TDialogCreateRoute, IPopupCreate>>;

export default TChoicePopupCreate;
