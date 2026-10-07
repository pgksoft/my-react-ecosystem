import type { TProductCategoryDto } from '../../entity/product-category';

const getProductCategoryBriefDescription = (
  category: TProductCategoryDto
): string => {
  return category.name;
};

export default getProductCategoryBriefDescription;
