import type {
  TColumnCheckboxItem,
  TColumnCheckboxItems
} from '../../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import {
  isArrayProductCategory,
  type TProductCategory
} from '../../entity/product-category';

const getProductCategoryColumnCheckboxItems = (
  entity: TProductCategory[]
): TColumnCheckboxItems => {
  if (isArrayProductCategory(entity)) {
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

export default getProductCategoryColumnCheckboxItems;
