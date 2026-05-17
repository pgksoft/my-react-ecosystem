import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import type TValueOf from '../../../app-types/t-value-of';
import type TypeGuard from '../../../app-types/type-guard';

type TParameterizedDialogRemoveRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}Remove`;

export type TDialogRemoveRoute =
  TParameterizedDialogRemoveRoute<TEntityNameKeys>;

type TEntityDialogRemoveRouts = {
  [K in TEntityNameKeys]: TParameterizedDialogRemoveRoute<K>;
};

type TListDialogRemoveRoutes = Partial<TEntityDialogRemoveRouts>;

const LIST_DIALOG_REMOVE_ROUTES = {
  contact: 'ContactRemove',
  todo: 'TodoRemove',
  shop: 'ShopRemove',
  productCategoryDic: 'ProductCategoryDicRemove',
  productDic: 'ProductDicRemove',
  shopProduct: 'ShopProductRemove'
} as const satisfies TListDialogRemoveRoutes;

export default LIST_DIALOG_REMOVE_ROUTES;

// Helpers
type TValueOfListDialogRemoveRoutes = TValueOf<
  typeof LIST_DIALOG_REMOVE_ROUTES
>;
export const isDialogRemoveRouter: TypeGuard<TDialogRemoveRoute> = (
  value: unknown
): value is TValueOfListDialogRemoveRoutes => {
  return Object.values(LIST_DIALOG_REMOVE_ROUTES).includes(
    value as TValueOfListDialogRemoveRoutes
  );
};

export const getEntityNameKeyFromDialogRemoveRoutes = (
  dialogRemoveRoute: TDialogRemoveRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(LIST_DIALOG_REMOVE_ROUTES).find(
    ([key, value]) => {
      return value === dialogRemoveRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};
