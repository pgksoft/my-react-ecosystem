import TPopupDetail from './t-popup-detail';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import type { TDialogDetailRoute } from '../const/dialog-detail-routes';

type TChoicePopupDetail = Partial<
  Record<TDialogDetailRoute, TPopupDetail<IEntityMember>>
>;

export default TChoicePopupDetail;
