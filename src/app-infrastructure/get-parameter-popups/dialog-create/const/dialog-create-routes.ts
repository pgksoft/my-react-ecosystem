import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';
import createIsUnknownRecordKeyGuard from '../../../app-helpers/create-is-unknown-record-key-guard';
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

export type TValueOfListDialogCreateRoutes = TValueOf<
  typeof LIST_DIALOG_CREATE_ROUTES
>;

export const isDialogCreateRouter = createIsStringRecordValueGuard(
  LIST_DIALOG_CREATE_ROUTES
);

export const isDialogCreateKey = createIsUnknownRecordKeyGuard(
  LIST_DIALOG_CREATE_ROUTES
);

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
