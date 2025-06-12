import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TDialogDetailRoute from '../t-choice-popup-detail/t-dialog-detail-route';

type TDialogDetailRoutes = Partial<Record<TEntityNameKeys, TDialogDetailRoute>>;

const DIALOG_DETAIL_ROUTES: TDialogDetailRoutes = {
  contact: 'ContactDetail',
  todo: 'TodoDetail'
};

export default DIALOG_DETAIL_ROUTES;
