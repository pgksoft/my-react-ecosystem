import React from 'react';
import type { TShop } from '../../../shops/entity/shops';
import ShopBriefDescription from '../../../shops/ui/shop-brief-description';

const renderShopCard = (item: TShop) => {
  return <ShopBriefDescription shop={item} variant='body1' />;
};

export default renderShopCard;
