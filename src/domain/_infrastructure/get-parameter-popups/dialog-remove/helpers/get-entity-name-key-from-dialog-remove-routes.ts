import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import DIALOG_REMOVE_ROUTES from '../const/dialog-remove-routes';
import TDialogRemoveRoute from '../t-choice-popup-remove/t-dialog-remove-route';

const getEntityNameKeyFromDialogRemoveRoutes = (
  dialogRemoveRoute: TDialogRemoveRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(DIALOG_REMOVE_ROUTES).find(
    ([key, value]) => {
      return value === dialogRemoveRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};

export default getEntityNameKeyFromDialogRemoveRoutes;
