import TPopupDetail from './t-popup-detail';
import TDialogDetailRoute from './t-dialog-detail-route';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';

type TChoicePopupDetail = Partial<
  Record<TDialogDetailRoute, TPopupDetail<IEntityMember>>
>;

export default TChoicePopupDetail;
