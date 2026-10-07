import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createGetKeyFromStringRecord from '../../../app-helpers/create-get-key-from-string-record';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';

export const filterSettingsOffRouteSuffix = 'FilterSettingsOff' as const;

type TParameterizedListFilterSettingsOffRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}${typeof filterSettingsOffRouteSuffix}`;

type TEntityFilterSettingsOffRoutes = {
  [K in TEntityNameKeys]: TParameterizedListFilterSettingsOffRoute<K>;
};

const LIST_ENTITIES_FILTER_SETTINGS_OFF_ROUTES = {
  simpleNewsletterSignUp: 'SimpleNewsletterSignUpFilterSettingsOff',
  contact: 'ContactFilterSettingsOff',
  todo: 'TodoFilterSettingsOff',
  shop: 'ShopFilterSettingsOff',
  productCategoryDic: 'ProductCategoryDicFilterSettingsOff',
  productDic: 'ProductDicFilterSettingsOff',
  shopProduct: 'ShopProductFilterSettingsOff'
} as const satisfies TEntityFilterSettingsOffRoutes;

export default LIST_ENTITIES_FILTER_SETTINGS_OFF_ROUTES;

// Helpers
export const isListFilterSettingsOffRoute = createIsStringRecordValueGuard(
  LIST_ENTITIES_FILTER_SETTINGS_OFF_ROUTES
);

export const getEntityNameKeyFromListFilterSettingsOffRoutes =
  createGetKeyFromStringRecord(
    LIST_ENTITIES_FILTER_SETTINGS_OFF_ROUTES,
    isEntityNameKeys
  );
