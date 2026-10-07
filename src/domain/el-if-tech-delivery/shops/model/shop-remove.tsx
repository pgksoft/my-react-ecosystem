import React, { type FC } from 'react';
import type TDialogRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-dialog-remove';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import ShopBriefDescription from '../ui/shop-brief-description';
import { isShop } from '../entity/shops';

const ShopRemove: FC<TDialogRemove<IEntityMember>> = ({ entity }) => {
  if (!isShop(entity)) return null;
  return <ShopBriefDescription shop={entity} />;
};

export default ShopRemove;
