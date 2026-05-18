import React, { ReactNode } from 'react';
import { isShop } from '../../entity/shops';
import { ShopRatingView } from './shop-rating-view';

const ShopRatingListView = (value: unknown, data?: unknown): ReactNode => {
  if (!(typeof value === 'number' && isShop(data))) {
    throw new Error('is not a Shop entity');
  }
  return <ShopRatingView rating={value} />;
};

export default ShopRatingListView;
