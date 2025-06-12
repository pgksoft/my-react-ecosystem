import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TDialogRemoveRoute from '../t-choice-popup-remove/t-dialog-remove-route';

type TDialogRemoveRoutes = Partial<Record<TEntityNameKeys, TDialogRemoveRoute>>;

const DIALOG_REMOVE_ROUTES: TDialogRemoveRoutes = {
  contact: 'ContactRemove',
  todo: 'TodoRemove'
};

export default DIALOG_REMOVE_ROUTES;
