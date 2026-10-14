import React from 'react';
import type { TProduct } from '../../../product-dic/entity/product';
import ProductBriefDescription from '../../../product-dic/helpers/product-brief-description';

const renderProductCard = (item: TProduct) => {
  return <ProductBriefDescription product={item} variant='body1' />;
};

export default renderProductCard;
