import React, { ReactNode } from 'react';
import { isShop } from '../../entity/shops';
import RatingView from '../../../../../app-infrastructure/app-ui/rating-view';

const ShopRatingListView = (value: unknown, data?: unknown): ReactNode => {
  if (!(typeof value === 'number' && isShop(data))) {
    throw new Error('is not a Shop entity');
  }
  return <RatingView defaultValue={value} />;
};

export default ShopRatingListView;
