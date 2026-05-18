import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import type TValueOf from '../../../app-types/t-value-of';

type TParameterizedDialogCreateRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}Create`;

export type TDialogCreateRoute =
  TParameterizedDialogCreateRoute<TEntityNameKeys>;

type TEntityDialogCreateRouts = {
  [K in TEntityNameKeys]: TParameterizedDialogCreateRoute<K>;
};

type TListDialogCreateRoutes = Partial<TEntityDialogCreateRouts>;

const LIST_DIALOG_CREATE_ROUTES = {
  contact: 'ContactCreate',
  todo: 'TodoCreate',
  shop: 'ShopCreate',
  productCategoryDic: 'ProductCategoryDicCreate',
  productDic: 'ProductDicCreate',
  shopProduct: 'ShopProductCreate'
} as const satisfies TListDialogCreateRoutes;

export default LIST_DIALOG_CREATE_ROUTES;

// Helpers
type TValueOfListDialogCreateRoutes = TValueOf<
  typeof LIST_DIALOG_CREATE_ROUTES
>;
export const isDialogCreateRouter = (
  value: string
): value is TValueOfListDialogCreateRoutes => {
  return Object.values(LIST_DIALOG_CREATE_ROUTES).includes(
    value as TValueOfListDialogCreateRoutes
  );
};

export const isDialogCreateKey = (
  value: string
): value is keyof typeof LIST_DIALOG_CREATE_ROUTES => {
  return Object.keys(LIST_DIALOG_CREATE_ROUTES).includes(value);
};

export const getEntityNameKeyFromDialogCreateRoutes = (
  dialogCreateRoute: TDialogCreateRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(LIST_DIALOG_CREATE_ROUTES).find(
    ([key, value]) => {
      return value === dialogCreateRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};
