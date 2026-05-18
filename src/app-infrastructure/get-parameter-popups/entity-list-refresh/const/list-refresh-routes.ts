import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';

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
export const isListRefreshRoute = (
  value: string
): value is TListRefreshRoute => {
  return Object.values(LIST_ENTITIES_REFRESH_ROUTES).includes(
    value as TListRefreshRoute
  );
};

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
