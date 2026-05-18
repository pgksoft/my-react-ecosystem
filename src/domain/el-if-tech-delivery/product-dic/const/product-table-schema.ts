import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import { ColumnType } from '../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import type {
  TExtractTableSchemaDataKeys,
  TTableSchema
} from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import { keyProductDto } from '../entity/product';
import TITLES_DELIVERY_PRODUCT from './titles';

const productTableSchema = [
  { title: '', type: ColumnType.null, key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_PRODUCT.name,
    type: ColumnType.search,
    key: getRandomUuid(),
    dataKey: keyProductDto.name,
    isSort: true,
    valueSearch: '',
    sx: { width: '25%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCT.category,
    type: ColumnType.checkBox,
    key: getRandomUuid(),
    dataKey: 'category.name',
    isSort: true,
    checkboxes: [],
    sx: { width: '20%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCT.mutationDate,
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

export default productTableSchema;

export type TProductTableSchemaDataKey = TExtractTableSchemaDataKeys<
  typeof productTableSchema
>;
