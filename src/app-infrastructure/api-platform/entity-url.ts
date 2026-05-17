import type TEntityNameKeys from './app-entities/app-entities-types/t-entity-key-names';

export type TEntityUrl = `${TEntityNameKeys}s` | `${TEntityNameKeys}`;

const entityUrl: Record<TEntityNameKeys, TEntityUrl> = {
  simpleNewsletterSignUp: 'simpleNewsletterSignUps',
  contact: 'contacts',
  todo: 'todos',
  shop: 'shops',
  productCategoryDic: 'productCategoryDic',
  productDic: 'productDic',
  shopProduct: 'shopProducts'
};

export default entityUrl;
