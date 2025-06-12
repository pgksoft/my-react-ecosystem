import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import DIALOG_DETAIL_ROUTES from '../const/dialog-detail-routes';
import TDialogDetailRoute from '../t-choice-popup-detail/t-dialog-detail-route';

const getEntityNameKeyFromDialogDetailRoutes = (
  dialogDetailRoute: TDialogDetailRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(DIALOG_DETAIL_ROUTES).find(
    ([key, value]) => {
      return value === dialogDetailRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};

export default getEntityNameKeyFromDialogDetailRoutes;
