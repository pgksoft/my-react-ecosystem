import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import { ColumnType } from '../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import type {
  TExtractTableSchemaDataKeys,
  TTableSchema
} from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import ratingSearchCheckBoxes from '../../shops/const/rating-search-check-boxes';
import TITLES_DELIVERY_SHOPS from '../../shops/const/titles';
import ProductsInShopsImageListView from '../ui/products-in-shops-image-list-view';
import ProductsInShopsRatingListView from '../ui/products-in-shops-rating-list-view';
import { TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const productsInStoresTableSchema = [
  { title: '', type: ColumnType.null, key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.store,
    type: ColumnType.checkBox,
    key: getRandomUuid(),
    checkboxes: [],
    dataKey: 'shop.name',
    isSort: true,
    sx: { width: '20%' }
  },
  {
    title: TITLES_DELIVERY_SHOPS.rating,
    type: ColumnType.checkBox,
    key: getRandomUuid(),
    dataKey: 'shop.rating',
    isSort: true,
    checkboxes: ratingSearchCheckBoxes,
    sx: { width: '20%' },
    getContent: ProductsInShopsRatingListView
  },
  {
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.product,
    type: ColumnType.search,
    key: getRandomUuid(),
    dataKey: 'product.name',
    valueSearch: ''
  },
  {
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.category,
    type: ColumnType.checkBox,
    key: getRandomUuid(),
    dataKey: 'product.category.name',
    isSort: true,
    checkboxes: [],
    sx: { width: '15%' }
  },
  {
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.image,
    type: ColumnType.null,
    key: getRandomUuid(),
    dataKey: 'fileMeta.originalname',
    getContent: ProductsInShopsImageListView
  },
  {
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.mutationDate,
    type: ColumnType.null,
    key: getRandomUuid(),
    dataKey: 'mutationDate',
    getContent: (value: TValueType) => {
      if (typeof value === 'string') {
        return new Date(value).toLocaleString().replace(',', '');
      }
      return '';
    }
  }
] as const satisfies TTableSchema;

export default productsInStoresTableSchema;

export type TProductsInShopsTableSchemaDataKey = TExtractTableSchemaDataKeys<
  typeof productsInStoresTableSchema
>;
