import { productCategorySortParamKeyList } from '../../../../domain/el-if-tech-delivery/product-category-dic/const/product-category-table-schema';
import { productSortParamKeyList } from '../../../../domain/el-if-tech-delivery/product-dic/const/product-table-schema';
import { productsInShopsSortParamKeyList } from '../../../../domain/el-if-tech-delivery/products-in-stores/const/products-in-stores-table-schema';
import { shopSortParamKeyList } from '../../../../domain/el-if-tech-delivery/shops/const/shop-table-schema';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';

type TEntitySortParamKeyListMap = Record<TEntityNameKeys, readonly string[]>;

export const ENTITY_SORT_PARAM_KEY_LIST_MAP = {
  productCategoryDic: productCategorySortParamKeyList,
  shop: shopSortParamKeyList,
  productDic: productSortParamKeyList,
  shopProduct: productsInShopsSortParamKeyList,
  contact: [],
  simpleNewsletterSignUp: [],
  todo: []
} as const satisfies TEntitySortParamKeyListMap;
