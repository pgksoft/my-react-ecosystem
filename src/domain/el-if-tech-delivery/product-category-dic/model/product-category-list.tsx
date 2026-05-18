import React, { FC } from 'react';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import productCategoryTableSchema from '../const/product-category-table-schema';

const ProductCategoryList: FC = () => {
  return (
    <BuildEntityTable
      entityNameKey='productCategoryDic'
      tableSchema={productCategoryTableSchema}
    />
  );
};

export default ProductCategoryList;
