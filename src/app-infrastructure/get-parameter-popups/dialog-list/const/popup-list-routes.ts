import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TParameterizedEntityName } from '../../../api-platform/app-entities/app-entities-types/t-entity-name';
import type TCapitalizeFirstLetter from '../../../app-types/t-capitalize-first-letter';

type TParameterizedPopupListRoute<K extends TEntityNameKeys> =
  `${TParameterizedEntityName<K>}List`;

type TPopupListRoute = TParameterizedPopupListRoute<TEntityNameKeys>;

type TEntityPopupListRouts = {
  [K in TEntityNameKeys]: TParameterizedPopupListRoute<K>;
};
type TListPopupListRoutes = Partial<TEntityPopupListRouts>;

const LIST_POPUP_LIST_ROUTES = {
  contact: 'ContactList',
  todo: 'TodoList',
  shop: 'ShopList',
  productCategoryDic: 'ProductCategoryDicList',
  productDic: 'ProductDicList',
  shopProduct: 'ShopProductList'
} as const satisfies TListPopupListRoutes;

type TEntityFilteredNameKey = `${TEntityNameKeys}Filtered`;

type TParameterizedEntityFiltersName<K extends TEntityFilteredNameKey> =
  TCapitalizeFirstLetter<K>;

type TParameterizedPopupFilteredListRoute<K extends TEntityFilteredNameKey> =
  `${TParameterizedEntityFiltersName<K>}List`;

type TPopupFilteredListRoute =
  TParameterizedPopupFilteredListRoute<TEntityFilteredNameKey>;

type TEntityPopupFilteredListRoutes = {
  [K in TEntityFilteredNameKey]: TParameterizedPopupFilteredListRoute<K>;
};

type TListPopupFilteredListRoutes = Partial<TEntityPopupFilteredListRoutes>;

const LIST_POPUP_FILTERED_LIST_ROUTS = {
  contactFiltered: 'ContactFilteredList',
  todoFiltered: 'TodoFilteredList',
  shopFiltered: 'ShopFilteredList',
  productCategoryDicFiltered: 'ProductCategoryDicFilteredList',
  productDicFiltered: 'ProductDicFilteredList',
  shopProductFiltered: 'ShopProductFilteredList'
} as const satisfies TListPopupFilteredListRoutes;

export { LIST_POPUP_LIST_ROUTES, LIST_POPUP_FILTERED_LIST_ROUTS };
export type { TPopupListRoute, TPopupFilteredListRoute };
