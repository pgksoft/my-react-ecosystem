import TPopupRemove from './t-popup-remove';
import TDialogRemoveRoute from './t-dialog-remove-route';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';

type TChoicePopupRemove = Partial<
  Record<TDialogRemoveRoute, TPopupRemove<IEntityMember>>
>;

export default TChoicePopupRemove;
