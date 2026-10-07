import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import { isEntityNameKeys } from '../../../api-platform/app-entities/helpers/entity-name-key-list';
import createIsStringRecordValueGuard from '../../../app-helpers/create-is-string-record-value-guard';
import type TCapitalizeFirstLetter from '../../../app-types/t-capitalize-first-letter';

type TParameterizedPopupListRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}List`;

type TPopupListRoute = TParameterizedPopupListRoute<TEntityNameKeys>;

type TListEntityPopupListRouts = {
  [K in TEntityNameKeys]: TParameterizedPopupListRoute<K>;
};

const LIST_POPUP_LIST_ROUTES = {
  contact: 'ContactList',
  todo: 'TodoList',
  shop: 'ShopList',
  productCategoryDic: 'ProductCategoryDicList',
  productDic: 'ProductDicList',
  shopProduct: 'ShopProductList',
  simpleNewsletterSignUp: 'SimpleNewsletterSignUpList'
} as const satisfies TListEntityPopupListRouts;

type TEntityFilteredNameKey = `${TEntityNameKeys}Filtered`;

type TParameterizedEntityFiltersName<K extends TEntityFilteredNameKey> =
  TCapitalizeFirstLetter<K>;

type TParameterizedPopupFilteredListRoute<K extends TEntityFilteredNameKey> =
  `${TParameterizedEntityFiltersName<K>}List`;

type TPopupFilteredListRoute =
  TParameterizedPopupFilteredListRoute<TEntityFilteredNameKey>;

type TListEntityPopupFilteredListRoutes = {
  [K in TEntityFilteredNameKey]: TParameterizedPopupFilteredListRoute<K>;
};

const LIST_POPUP_FILTERED_LIST_ROUTS = {
  contactFiltered: 'ContactFilteredList',
  todoFiltered: 'TodoFilteredList',
  shopFiltered: 'ShopFilteredList',
  productCategoryDicFiltered: 'ProductCategoryDicFilteredList',
  productDicFiltered: 'ProductDicFilteredList',
  shopProductFiltered: 'ShopProductFilteredList',
  simpleNewsletterSignUpFiltered: 'SimpleNewsletterSignUpFilteredList'
} as const satisfies TListEntityPopupFilteredListRoutes;

export { LIST_POPUP_LIST_ROUTES, LIST_POPUP_FILTERED_LIST_ROUTS };
export type { TPopupListRoute, TPopupFilteredListRoute };

export const isPopupListRouter = createIsStringRecordValueGuard(
  LIST_POPUP_LIST_ROUTES
);

export const getEntityNameKeyFromPopupListRoutes = (
  popupListRoute: TPopupListRoute
): TEntityNameKeys | null => {
  const entityNameKey = Object.entries(LIST_POPUP_LIST_ROUTES).find(
    ([key, value]) => {
      return value === popupListRoute;
    }
  )?.[0];
  if (entityNameKey && isEntityNameKeys(entityNameKey)) return entityNameKey;
  return null;
};

export const isPopupListFilteredRouter = createIsStringRecordValueGuard(
  LIST_POPUP_FILTERED_LIST_ROUTS
);
