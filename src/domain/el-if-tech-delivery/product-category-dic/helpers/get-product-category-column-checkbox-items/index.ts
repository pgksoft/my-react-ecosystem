import type {
  TColumnCheckboxItem,
  TColumnCheckboxItems
} from '../../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import type { TProductCategory } from '../../entity/product-category';

const getProductCategoryColumnCheckboxItems = (
  entity: TProductCategory[]
): TColumnCheckboxItems => {
  return entity.map((item) => {
    return {
      key: item.id,
      title: item.name,
      value: false
    } satisfies TColumnCheckboxItem;
  });
};

export default getProductCategoryColumnCheckboxItems;
