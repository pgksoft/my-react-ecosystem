import { productCategoryMetaData } from '../../domain/el-if-tech-delivery/product-category-dic/const/product-category-metadata';
import { productMetaData } from '../../domain/el-if-tech-delivery/product-dic/const/product-metadata';
import { productInStoresMetaData } from '../../domain/el-if-tech-delivery/products-in-stores/entity/product-in-stores-metadata';
import { shopMetaData } from '../../domain/el-if-tech-delivery/shops/const/shop-metadata';
import { contactMetaData } from '../../domain/genius-space-courses/react/json-server-and-axios/const/contact-metadata';
import { todoMetaData } from '../../domain/genius-space-courses/react/to-do-list/const/to-do-metadata';
import { simpleNewsletterSignUpMetaData } from '../../domain/simple-newsletter-sign-up/const/simple-newsletter-sign-up-metadata';
import type { TEntityMetadataMaps } from './types';

const entityMetadataMaps = {
  contact: contactMetaData,
  todo: todoMetaData,
  simpleNewsletterSignUp: simpleNewsletterSignUpMetaData,
  productCategoryDic: productCategoryMetaData,
  productDic: productMetaData,
  shopProduct: productInStoresMetaData,
  shop: shopMetaData
} as const satisfies TEntityMetadataMaps;

export default entityMetadataMaps;
