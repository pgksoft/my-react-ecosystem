import type {
  TExtractTableSchemaSearchKeys,
  TTableSchema,
  TTableSchemaSearchParamKeys,
  TTableSchemaSearchParams,
  TTableSchemaSortParamKeys
} from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';
import { type TKeyProductCategory } from '../entity/product-category';
import { getListSearchParamKeys } from '../../../../app-infrastructure/app-helpers/get-list-search-param-keys';

const productCategoryTableSchema = [
  { title: '', type: 'null', key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.name,
    type: 'search',
    key: getRandomUuid(),
    dataKey: 'name',
    isSort: true,
    valueSearch: '',
    sx: { width: '25%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.mutationDate,
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
] as const satisfies TTableSchema<TKeyProductCategory>;

export default productCategoryTableSchema;

export type TProductCategorySearchKey = TExtractTableSchemaSearchKeys<
  typeof productCategoryTableSchema
>;

export type TProductCategorySearchParams = TTableSchemaSearchParams<
  typeof productCategoryTableSchema
>;

export const productCategorySearchParamKeys = {
  name: ['name'],
  mutationDate: ['mutationDate[gt]', 'mutationDate[lt]']
} as const satisfies TTableSchemaSearchParamKeys<
  typeof productCategoryTableSchema
>;

export const productCategorySearchParamKeyList = getListSearchParamKeys(
  productCategorySearchParamKeys
);

export const productCategorySortParamKeys = {
  name: ['sort[name]']
} as const satisfies TTableSchemaSortParamKeys<
  typeof productCategoryTableSchema
>;

export const productCategorySortParamKeyList = getListSearchParamKeys(
  productCategorySortParamKeys
);
