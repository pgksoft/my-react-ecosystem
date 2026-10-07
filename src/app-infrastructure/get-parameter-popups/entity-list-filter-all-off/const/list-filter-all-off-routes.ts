import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createGetKeyFromStringRecord from '../../../app-helpers/create-get-key-from-string-record';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';

export const filterAllOffRouteSuffix = 'FilterAllOff' as const;

type TParameterizedListFilterAllOffRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}${typeof filterAllOffRouteSuffix}`;

type TEntityFilterAllOffRoutes = {
  [K in TEntityNameKeys]: TParameterizedListFilterAllOffRoute<K>;
};

const LIST_ENTITIES_FILTER_ALL_OFF_ROUTES = {
  simpleNewsletterSignUp: 'SimpleNewsletterSignUpFilterAllOff',
  contact: 'ContactFilterAllOff',
  todo: 'TodoFilterAllOff',
  shop: 'ShopFilterAllOff',
  productCategoryDic: 'ProductCategoryDicFilterAllOff',
  productDic: 'ProductDicFilterAllOff',
  shopProduct: 'ShopProductFilterAllOff'
} as const satisfies TEntityFilterAllOffRoutes;

export default LIST_ENTITIES_FILTER_ALL_OFF_ROUTES;

// Helpers
export const isListFilterAllOffRoute = createIsStringRecordValueGuard(
  LIST_ENTITIES_FILTER_ALL_OFF_ROUTES
);

export const getEntityNameKeyFromListFilterAllOffRoutes =
  createGetKeyFromStringRecord(
    LIST_ENTITIES_FILTER_ALL_OFF_ROUTES,
    isEntityNameKeys
  );
