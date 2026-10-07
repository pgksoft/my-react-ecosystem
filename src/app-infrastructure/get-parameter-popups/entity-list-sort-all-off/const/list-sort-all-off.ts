import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createGetKeyFromStringRecord from '../../../app-helpers/create-get-key-from-string-record';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';

export const SortAllOffRouteSuffix = 'SortAllOff' as const;

type TParameterizedListSortAllOffRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}${typeof SortAllOffRouteSuffix}`;

type TEntitySortAllOffRoutes = {
  [K in TEntityNameKeys]: TParameterizedListSortAllOffRoute<K>;
};

const LIST_ENTITIES_SORT_ALL_OFF_ROUTES = {
  simpleNewsletterSignUp: 'SimpleNewsletterSignUpSortAllOff',
  contact: 'ContactSortAllOff',
  todo: 'TodoSortAllOff',
  shop: 'ShopSortAllOff',
  productCategoryDic: 'ProductCategoryDicSortAllOff',
  productDic: 'ProductDicSortAllOff',
  shopProduct: 'ShopProductSortAllOff'
} as const satisfies TEntitySortAllOffRoutes;

export default LIST_ENTITIES_SORT_ALL_OFF_ROUTES;

// Helpers
export const isListSortAllOffRoute = createIsStringRecordValueGuard(
  LIST_ENTITIES_SORT_ALL_OFF_ROUTES
);

export const getEntityNameKeyFromListSortAllOffRoutes =
  createGetKeyFromStringRecord(
    LIST_ENTITIES_SORT_ALL_OFF_ROUTES,
    isEntityNameKeys
  );
