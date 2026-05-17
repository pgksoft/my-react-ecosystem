import TEntityNameKeys from '../app-entities-types/t-entity-key-names';
import type { TCamelToKebab } from '../../../app-types/t-camel-to-kebab';

type TApiUrl<K extends TEntityNameKeys> =
  | `/${K}s`
  | (K extends `${string}Dic`
      ? `/api/${TCamelToKebab<K>}`
      : `/api/${TCamelToKebab<K>}s`);

export type TApiEntityUrl = TApiUrl<TEntityNameKeys>;

export type TApiEntitiesUrl = {
  [K in TEntityNameKeys]: TApiUrl<K>;
};

const apiEntityUrl = {
  simpleNewsletterSignUp: '/simpleNewsletterSignUps',
  contact: '/contacts',
  todo: '/todos',
  shop: '/api/shops',
  productCategoryDic: '/api/product-category-dic',
  productDic: '/api/product-dic',
  shopProduct: '/api/shop-products'
} as const satisfies TApiEntitiesUrl;

export default apiEntityUrl;
