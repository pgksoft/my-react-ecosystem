import TPopupRemove from './t-popup-remove';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import type { TDialogRemoveRoute } from '../const/dialog-remove-routes';

type TChoicePopupRemove = Partial<
  Record<TDialogRemoveRoute, TPopupRemove<IEntityMember>>
>;

export default TChoicePopupRemove;
