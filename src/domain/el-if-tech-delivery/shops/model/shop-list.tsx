import React, { FC } from 'react';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import shopTableSchema from '../const/shop-table-schema';

const ShopList: FC = () => {
  return (
    <BuildEntityTable entityNameKey='shop' tableSchema={shopTableSchema} />
  );
};

export default ShopList;
