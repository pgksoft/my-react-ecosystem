import { productCategorySearchParamKeyList } from '../../../../domain/el-if-tech-delivery/product-category-dic/const/product-category-table-schema';
import { productSearchParamKeyList } from '../../../../domain/el-if-tech-delivery/product-dic/const/product-table-schema';
import { productsInShopsSearchParamKeyList } from '../../../../domain/el-if-tech-delivery/products-in-stores/const/products-in-stores-table-schema';
import { shopSearchParamKeyList } from '../../../../domain/el-if-tech-delivery/shops/const/shop-table-schema';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';

type TEntitySearchParamKeyListMap = Record<TEntityNameKeys, readonly string[]>;

export const ENTITY_SEARCH_PARAM_KEY_LIST_MAP = {
  productCategoryDic: productCategorySearchParamKeyList,
  shop: shopSearchParamKeyList,
  productDic: productSearchParamKeyList,
  shopProduct: productsInShopsSearchParamKeyList,
  contact: [],
  todo: [],
  simpleNewsletterSignUp: []
} as const satisfies TEntitySearchParamKeyListMap;
