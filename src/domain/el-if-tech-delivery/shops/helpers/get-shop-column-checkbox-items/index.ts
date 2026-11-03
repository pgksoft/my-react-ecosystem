import type {
  TColumnCheckboxItem,
  TColumnCheckboxItems
} from '../../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import { isArrayShop, type TShop } from '../../entity/shops';

const getShopColumnCheckboxItems = (entity: TShop[]): TColumnCheckboxItems => {
  if (isArrayShop(entity)) {
    return entity.map((item) => {
      return {
        key: item.id,
        title: item.name,
        value: false
      } satisfies TColumnCheckboxItem;
    });
  }
  return [];
};

export default getShopColumnCheckboxItems;
