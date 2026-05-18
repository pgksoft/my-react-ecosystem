import { ColumnType } from '../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import type { TTableSchema } from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import getRandomUuid from '../../../../app-infrastructure/app-helpers/get-random-uuid';
import TITLES_DELIVERY_SHOPS from './titles';
import { keyShopDto } from '../entity/shops';
import type { TValueType } from '../../../../app-infrastructure/build-entity-table/table-types/t-data-table';
import ShopRatingListView from '../ui/shop-rating-list-view';
import ratingSearchCheckBoxes from './rating-search-check-boxes';

const shopTableSchema: TTableSchema = [
  { title: '', type: ColumnType.null, key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_DELIVERY_SHOPS.name,
    type: ColumnType.search,
    key: getRandomUuid(),
    dataKey: keyShopDto.name,
    isSort: true,
    valueSearch: '',
    sx: { width: '25%' }
  },
  {
    title: TITLES_DELIVERY_SHOPS.rating,
    type: ColumnType.checkBox,
    key: getRandomUuid(),
    dataKey: keyShopDto.rating,
    isSort: true,
    checkboxes: ratingSearchCheckBoxes,
    sx: { width: '20%' },
    getContent: ShopRatingListView
  },
  {
    title: TITLES_DELIVERY_SHOPS.mutationDate,
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

export default shopTableSchema;
