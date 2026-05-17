import type { TDialogCreateRoute } from '../const/dialog-create-routes';
import IPopupCreate from './i-popup-create';

type TChoicePopupCreate = Partial<Record<TDialogCreateRoute, IPopupCreate>>;

export default TChoicePopupCreate;
