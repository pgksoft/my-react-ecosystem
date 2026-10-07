import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';
import createIsUnknownRecordKeyGuard from '../../../app-helpers/create-is-unknown-record-key-guard';
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

export type TValueOfListDialogDetailRoutes = TValueOf<
  typeof LIST_DIALOG_DETAIL_ROUTES
>;

export const isDialogDetailRouter = createIsStringRecordValueGuard(
  LIST_DIALOG_DETAIL_ROUTES
);

export const isDialogDetailKey = createIsUnknownRecordKeyGuard(
  LIST_DIALOG_DETAIL_ROUTES
);

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
