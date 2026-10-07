import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';

type TLocalStorageEntitySearchParamsKeys = {
  [K in TEntityNameKeys]: `${K}-search-params`;
};

export const localStorageSearchKeys = {
  productCategoryDic: 'productCategoryDic-search-params',
  shop: 'shop-search-params',
  productDic: 'productDic-search-params',
  shopProduct: 'shopProduct-search-params',
  contact: 'contact-search-params',
  simpleNewsletterSignUp: 'simpleNewsletterSignUp-search-params',
  todo: 'todo-search-params'
} as const satisfies TLocalStorageEntitySearchParamsKeys;

type TLocalStorageEntitySortParamsKeys = {
  [K in TEntityNameKeys]: `${K}-sort-params`;
};

export const localStorageSortKeys = {
  productCategoryDic: 'productCategoryDic-sort-params',
  shop: 'shop-sort-params',
  productDic: 'productDic-sort-params',
  shopProduct: 'shopProduct-sort-params',
  contact: 'contact-sort-params',
  simpleNewsletterSignUp: 'simpleNewsletterSignUp-sort-params',
  todo: 'todo-sort-params'
} as const satisfies TLocalStorageEntitySortParamsKeys;
