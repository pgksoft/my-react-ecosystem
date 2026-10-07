import React, { ReactNode } from 'react';
import { isProductsInShops } from '../../entity/products-in-stores';
import RatingView from '../../../../../app-infrastructure/app-ui/rating-view';

const ProductsInShopsRatingListView = (
  value: unknown,
  data?: unknown
): ReactNode => {
  if (!(typeof value === 'number' && isProductsInShops(data))) {
    throw new Error('is not a Shop entity');
  }
  return <RatingView defaultValue={value} />;
};

export default ProductsInShopsRatingListView;
