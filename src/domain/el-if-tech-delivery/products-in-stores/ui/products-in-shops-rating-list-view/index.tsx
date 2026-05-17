import React, { ReactNode } from 'react';
import { isProductsInShops } from '../../entity/products-in-stores';
import { ShopRatingView } from '../../../shops/ui/shop-rating-list-view/shop-rating-view';

const ProductsInShopsRatingListView = (
  value: unknown,
  data?: unknown
): ReactNode => {
  if (!(typeof value === 'number' && isProductsInShops(data))) {
    throw new Error('is not a Shop entity');
  }
  return <ShopRatingView rating={value} />;
};

export default ProductsInShopsRatingListView;
