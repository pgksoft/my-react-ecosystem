import { getListSearchParamKeys } from '../../../../app-infrastructure/app-helpers/get-list-search-param-keys';
import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import type {
  TExtractTableSchemaSearchKeys,
  TTableSchema,
  TTableSchemaSearchParamKeys,
  TTableSchemaSearchParams,
  TTableSchemaSortParamKeys
} from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import { keyProductDto, type TKeyProduct } from '../entity/product';
import TITLES_DELIVERY_PRODUCT from './titles';

const productTableSchema = [
  { title: '', type: 'null', key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_PRODUCT.name,
    type: 'search',
    key: getRandomUuid(),
    dataKey: keyProductDto.name,
    isSort: true,
    valueSearch: '',
    sx: { width: '25%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCT.category,
    type: 'checkBox',
    key: getRandomUuid(),
    dataKey: 'category.name',
    nameGetParameter: 'category._id',
    isSort: true,
    checkboxes: [],
    sx: { width: '20%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCT.mutationDate,
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
] as const satisfies TTableSchema<TKeyProduct>;

export default productTableSchema;

export type TProductsTableSchemaSearchKey = TExtractTableSchemaSearchKeys<
  typeof productTableSchema
>;

export type TProductDicSearchParams = TTableSchemaSearchParams<
  typeof productTableSchema
>;

export const productSearchParamKeys = {
  name: ['name'],
  'category._id': ['category._id[]'],
  mutationDate: ['mutationDate[gt]', 'mutationDate[lt]']
} as const satisfies TTableSchemaSearchParamKeys<typeof productTableSchema>;

export const productSearchParamKeyList = getListSearchParamKeys(
  productSearchParamKeys
);

export const productSortParamKeys = {
  name: ['sort[name]'],
  'category.name': ['sort[category.name]']
} as const satisfies TTableSchemaSortParamKeys<typeof productTableSchema>;

export const productSortParamKeyList =
  getListSearchParamKeys(productSortParamKeys);
