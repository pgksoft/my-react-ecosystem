import React, { FC } from 'react';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import productCategoryTableSchema from '../const/product-category-table-schema';
import type TListDialog from '../../../../app-infrastructure/get-parameter-popups/dialog-list/t-choice-popup-list/t-list-dialog';

const ProductCategoryList: FC<TListDialog> = ({ entityPlacement = 'page' }) => {
  return (
    <BuildEntityTable
      entityNameKey='productCategoryDic'
      tableSchema={productCategoryTableSchema}
      entityPlacement={entityPlacement}
    />
  );
};

export default ProductCategoryList;
