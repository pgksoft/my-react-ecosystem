import type {
  TExtractTableSchemaSearchKeys,
  TTableSchema,
  TTableSchemaSearchParamKeys,
  TTableSchemaSearchParams,
  TTableSchemaSortParamKeys
} from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import TITLES_DELIVERY_SHOPS from './titles';
import { type TKeyShop } from '../entity/shops';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import ShopRatingListView from '../ui/shop-rating-list-view';
import { fixedRangesRatingSearch } from './rating-search-check-boxes';
import { getListSearchParamKeys } from '../../../../app-infrastructure/app-helpers/get-list-search-param-keys';

const shopTableSchema = [
  { title: '', type: 'null', key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_SHOPS.name,
    type: 'search',
    key: getRandomUuid(),
    dataKey: 'name',
    isSort: true,
    valueSearch: '',
    sx: { width: '25%' }
  },
  {
    title: TITLES_DELIVERY_SHOPS.rating,
    type: 'fixed-set-numerical-ranges',
    key: getRandomUuid(),
    dataKey: 'rating',
    isSort: true,
    ranges: fixedRangesRatingSearch,
    sx: { width: '20%' },
    getContent: ShopRatingListView
  },
  {
    title: TITLES_DELIVERY_SHOPS.mutationDate,
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
] as const satisfies TTableSchema<TKeyShop>;

export default shopTableSchema;

export type TProductTableSchemaSearchKey = TExtractTableSchemaSearchKeys<
  typeof shopTableSchema
>;

export type TShopSearchParams = TTableSchemaSearchParams<
  typeof shopTableSchema
>;

export const shopSearchParamKeys = {
  name: ['name'],
  rating: ['rating[gte]', 'rating[lte]'],
  mutationDate: ['mutationDate[gt]', 'mutationDate[lt]']
} as const satisfies TTableSchemaSearchParamKeys<typeof shopTableSchema>;

export const shopSearchParamKeyList =
  getListSearchParamKeys(shopSearchParamKeys);

export const shopSortParamKeys = {
  name: ['sort[name]'],
  rating: ['sort[rating]']
} as const satisfies TTableSchemaSortParamKeys<typeof shopTableSchema>;

export const shopSortParamKeyList = getListSearchParamKeys(shopSortParamKeys);
