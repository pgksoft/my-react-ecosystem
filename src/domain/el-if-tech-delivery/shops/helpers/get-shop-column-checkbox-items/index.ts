import type {
  TColumnCheckboxItem,
  TColumnCheckboxItems
} from '../../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import type { TShop } from '../../entity/shops';

const getShopColumnCheckboxItems = (entity: TShop[]): TColumnCheckboxItems => {
  return entity.map((item) => {
    return {
      key: item.id,
      title: item.name,
      value: false
    } satisfies TColumnCheckboxItem;
  });
};

export default getShopColumnCheckboxItems;
