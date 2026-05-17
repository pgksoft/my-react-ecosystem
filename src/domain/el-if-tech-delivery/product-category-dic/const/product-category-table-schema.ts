import { ColumnType } from '../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import type { TTableSchema } from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';
import { keyProductCategoryDto } from '../entity/product-category';

const productCategoryTableSchema: TTableSchema = [
  { title: '', type: ColumnType.null, key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.name,
    type: ColumnType.search,
    key: getRandomUuid(),
    dataKey: keyProductCategoryDto.name,
    isSort: true,
    valueSearch: '',
    sx: { width: '25%' }
  },
  {
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.mutationDate,
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
];

export default productCategoryTableSchema;
