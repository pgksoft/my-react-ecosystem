import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import type TValueOf from '../../../app-types/t-value-of';

type TParameterizedDialogDetailRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}Detail`;

export type TDialogDetailRoute =
  TParameterizedDialogDetailRoute<TEntityNameKeys>;

type TEntityDialogDetailRouts = {
  [K in TEntityNameKeys]: TParameterizedDialogDetailRoute<K>;
};

type TListDialogDetailRoutes = Partial<TEntityDialogDetailRouts>;

const LIST_DIALOG_DETAIL_ROUTES = {
  contact: 'ContactDetail',
  todo: 'TodoDetail',
  shop: 'ShopDetail',
  productCategoryDic: 'ProductCategoryDicDetail',
  productDic: 'ProductDicDetail',
  shopProduct: 'ShopProductDetail'
} as const satisfies TListDialogDetailRoutes;

export default LIST_DIALOG_DETAIL_ROUTES;

// Helpers
type TValueOfListDialogDetailRoutes = TValueOf<
  typeof LIST_DIALOG_DETAIL_ROUTES
>;
export const isDialogDetailRouter = (
  value: string
): value is TValueOfListDialogDetailRoutes => {
  return Object.values(LIST_DIALOG_DETAIL_ROUTES).includes(
    value as TValueOfListDialogDetailRoutes
  );
};

export const isDialogDetailKey = (
  value: string
): value is keyof typeof LIST_DIALOG_DETAIL_ROUTES => {
  return Object.keys(LIST_DIALOG_DETAIL_ROUTES).includes(value);
};

export const getEntityNameKeyFromDialogDetailRoutes = (
  dialogDetailRoute: TDialogDetailRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(LIST_DIALOG_DETAIL_ROUTES).find(
    ([key, value]) => {
      return value === dialogDetailRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};
