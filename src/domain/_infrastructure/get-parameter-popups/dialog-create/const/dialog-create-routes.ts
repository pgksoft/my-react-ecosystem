import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TDialogCreateRoute from '../t-choice-popup-create/t-dialog-create-route';

type TDialogCreateRoutes = Partial<Record<TEntityNameKeys, TDialogCreateRoute>>;

const DIALOG_CREATE_ROUTES: TDialogCreateRoutes = {
  contact: 'ContactCreate',
  todo: 'TodoCreate'
};

export default DIALOG_CREATE_ROUTES;
