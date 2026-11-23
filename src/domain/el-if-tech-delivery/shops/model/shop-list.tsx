import React, { FC } from 'react';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import shopTableSchema from '../const/shop-table-schema';
import type TListDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-list/t-choice-popup-list/t-list-dialog';

const ShopList: FC<TListDialog> = ({ entityPlacement = 'page' }) => {
  return (
    <BuildEntityTable
      entityNameKey='shop'
      tableSchema={shopTableSchema}
      entityPlacement={entityPlacement}
    />
  );
};

export default ShopList;
