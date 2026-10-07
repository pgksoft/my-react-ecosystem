import { getListSearchParamKeys } from '../../../../app-infrastructure/app-helpers/get-list-search-param-keys';
import getPriceToShow from '../../../../app-infrastructure/app-helpers/get-price-to-show';
import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import type {
  TExtractTableSchemaSearchKeys,
  TTableSchema,
  TTableSchemaSearchParamKeys,
  TTableSchemaSearchParams,
  TTableSchemaSortParamKeys
} from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import { fixedRangesRatingSearch } from '../../shops/const/rating-search-check-boxes';
import TITLES_DELIVERY_SHOPS from '../../shops/const/titles';
import { type TKeyProductsInStore } from '../entity/products-in-stores';
import ProductsInShopsImageListView from '../ui/products-in-shops-image-list-view';
import ProductsInShopsRatingListView from '../ui/products-in-shops-rating-list-view';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const productsInStoresTableSchema = [
  { title: '', type: 'null', key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.store,
    type: 'checkBox',
    key: getRandomUuid(),
    checkboxes: [],
    dataKey: 'shop.name',
    nameGetParameter: 'shop._id',
    isSort: true,
    sx: { width: '20%' }
  },
  {
    title: TITLES_DELIVERY_SHOPS.rating,
    type: 'fixed-set-numerical-ranges',
    key: getRandomUuid(),
    dataKey: 'shop.rating',
    isSort: true,
    ranges: fixedRangesRatingSearch,
    sx: { width: '20%' },
    getContent: ProductsInShopsRatingListView
  },
  {
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.product,
    type: 'search',
    key: getRandomUuid(),
    dataKey: 'product.name',
    isSort: true,
    valueSearch: ''
  },
  {
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.category,
    type: 'checkBox',
    key: getRandomUuid(),
    dataKey: 'product.category.name',
    nameGetParameter: 'product.category._id',
    isSort: true,
    checkboxes: [],
    sx: { width: '15%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.image,
    type: 'null',
    key: getRandomUuid(),
    dataKey: 'fileMeta.originalname',
    getContent: ProductsInShopsImageListView,
    sx: { display: 'flex', justifyContent: 'center' }
  },
  {
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.price,
    type: 'null',
    key: getRandomUuid(),
    dataKey: 'price',
    isSort: true,
    getContent: (value: TValueType) => {
      if (typeof value === 'number') {
        return getPriceToShow(value);
      }
      return '';
    }
  },
  {
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.mutationDate,
    type: 'calendar',
    key: getRandomUuid(),
    dataKey: 'mutationDate',
    dateSearch: { fromDate: null, toDate: null },
    getContent: (value: TValueType) => {
      if (typeof value === 'string') {
        return new Date(value).toLocaleString().replace(',', '');
      }
      return '';
    }
  }
] as const satisfies TTableSchema<TKeyProductsInStore>;

export default productsInStoresTableSchema;

export type TProductsInShopsTableSchemaSearchKey =
  TExtractTableSchemaSearchKeys<typeof productsInStoresTableSchema>;

export type TProductsInStoresSearchParams = TTableSchemaSearchParams<
  typeof productsInStoresTableSchema
>;

export const productsInShopsSearchParamKeys = {
  'shop._id': ['shop._id[]'],
  'shop.rating': ['shop.rating[gte]', 'shop.rating[lte]'],
  'product.name': ['product.name'],
  'product.category._id': ['product.category._id[]'],
  mutationDate: ['mutationDate[gt]', 'mutationDate[lt]']
} as const satisfies TTableSchemaSearchParamKeys<
  typeof productsInStoresTableSchema
>;

export const productsInShopsSearchParamKeyList = getListSearchParamKeys(
  productsInShopsSearchParamKeys
);

export const productsInShopsSortParamKeys = {
  'shop.name': ['sort[shop.name]'],
  'shop.rating': ['sort[shop.rating]'],
  'product.name': ['sort[product.name]'],
  'product.category.name': ['sort[product.category.name]'],
  price: ['sort[price]']
} as const satisfies TTableSchemaSortParamKeys<
  typeof productsInStoresTableSchema
>;

export const productsInShopsSortParamKeyList = getListSearchParamKeys(
  productsInShopsSortParamKeys
);
