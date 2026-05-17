import React, { useEffect, useState, type FC } from 'react';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import productTableSchema from '../const/product-table-schema';
import type { TTableSchema } from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import type TEntityList from '../../../../app-infrastructure/get-parameter-popups/dialog-list/t-choice-popup-list/t-entity-list';
import useCachingDataInSessionStorage from '../../../../app-infrastructure/app-hook-helpers/caching-data-in-session-storage.hook.ts';
import {
  isProductCategory,
  type TProductCategory
} from '../../product-category-dic/entity/product-category';
import { defineItemsCheckboxColumn } from '../../../../app-infrastructure/build-entity-table/helpers/define-items-checkbox-column';
import getProductCategoryColumnCheckboxItems from '../../product-category-dic/helpers/get-product-category-column-checkbox-items';

const ProductList: FC<TEntityList> = ({ mountedPopup = undefined }) => {
  const [tableSchema, setTableSchema] = useState<TTableSchema>([]);

  const productCategories = useCachingDataInSessionStorage<TProductCategory>({
    entityNameKey: 'productCategoryDic',
    isEntityGuard: isProductCategory
  });

  useEffect(() => {
    let newTableSchema: TTableSchema = productTableSchema;
    if (productCategories) {
      newTableSchema = defineItemsCheckboxColumn(
        productTableSchema,
        getProductCategoryColumnCheckboxItems(productCategories),
        'category.name'
      );
    }
    setTableSchema(newTableSchema);
  }, [productCategories]);

  if (tableSchema.length === 0) return null;

  return (
    <BuildEntityTable
      entityNameKey='productDic'
      tableSchema={tableSchema}
      returnPopup={mountedPopup}
    />
  );
};

export default ProductList;
