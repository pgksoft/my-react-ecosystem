import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import DIALOG_CREATE_ROUTES from '../const/dialog-create-routes';
import TDialogCreateRoute from '../t-choice-popup-create/t-dialog-create-route';

const getEntityNameKeyFromDialogCreateRoutes = (
  dialogCreateRoute: TDialogCreateRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(DIALOG_CREATE_ROUTES).find(
    ([key, value]) => {
      return value === dialogCreateRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};

export default getEntityNameKeyFromDialogCreateRoutes;
