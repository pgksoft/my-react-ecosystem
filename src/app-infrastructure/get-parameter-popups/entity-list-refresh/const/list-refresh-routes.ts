import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';

type TParameterizedListRefreshRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}Refresh`;

type TListRefreshRoute = TParameterizedListRefreshRoute<TEntityNameKeys>;

type TEntityRefreshRouts = {
  [K in TEntityNameKeys]: TParameterizedListRefreshRoute<K>;
};

const LIST_ENTITIES_REFRESH_ROUTES = {
  simpleNewsletterSignUp: 'SimpleNewsletterSignUpRefresh',
  contact: 'ContactRefresh',
  todo: 'TodoRefresh',
  shop: 'ShopRefresh',
  productCategoryDic: 'ProductCategoryDicRefresh',
  productDic: 'ProductDicRefresh',
  shopProduct: 'ShopProductRefresh'
} as const satisfies TEntityRefreshRouts;

export default LIST_ENTITIES_REFRESH_ROUTES;

// Helpers
export const isListRefreshRoute = createIsStringRecordValueGuard(
  LIST_ENTITIES_REFRESH_ROUTES
);

export const getEntityNameKeyFromListRefreshRoutes = (
  listRefreshRoute: TListRefreshRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(LIST_ENTITIES_REFRESH_ROUTES).find(
    ([key, value]) => {
      return value === listRefreshRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};
