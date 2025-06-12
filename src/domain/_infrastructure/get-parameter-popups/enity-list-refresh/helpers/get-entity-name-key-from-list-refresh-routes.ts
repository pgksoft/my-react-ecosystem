import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import LIST_REFRESH_ROUTES from '../const/list-refresh-routes';
import TListRefreshRoute from '../t-choice-list-refresh/t-list-refresh-route';

const getEntityNameKeyFromListRefreshRoutes = (
  listRefreshRoute: TListRefreshRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(LIST_REFRESH_ROUTES).find(
    ([key, value]) => {
      return value === listRefreshRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};

export default getEntityNameKeyFromListRefreshRoutes;
