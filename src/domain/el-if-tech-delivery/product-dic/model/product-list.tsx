import React, { useEffect, useState, type FC } from 'react';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import productTableSchema from '../const/product-table-schema';
import type { TTableSchema } from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import useCachingDataInSessionStorage from '../../../../app-infrastructure/app-hook-helpers/caching-data-in-session-storage.hook';
import {
  isProductCategory,
  type TProductCategory
} from '../../product-category-dic/entity/product-category';
import { defineItemsCheckboxColumn } from '../../../../app-infrastructure/build-entity-table/helpers/define-items-checkbox-column';
import getProductCategoryColumnCheckboxItems from '../../product-category-dic/helpers/get-product-category-column-checkbox-items';
import type { TKeyProduct } from '../entity/product';

const ProductList: FC = () => {
  const [tableSchema, setTableSchema] = useState<TTableSchema<TKeyProduct>>([]);

  const productCategories = useCachingDataInSessionStorage<TProductCategory>({
    entityNameKey: 'productCategoryDic',
    isEntityGuard: isProductCategory
  });

  useEffect(() => {
    let newTableSchema: TTableSchema<TKeyProduct> = productTableSchema;
    if (productCategories) {
      newTableSchema = defineItemsCheckboxColumn<
        TKeyProduct,
        TTableSchema<TKeyProduct>
      >(
        productTableSchema,
        getProductCategoryColumnCheckboxItems(productCategories),
        'category.name'
      );
    }
    setTableSchema(newTableSchema);
  }, [productCategories]);

  if (tableSchema.length === 0) return null;

  return (
    <BuildEntityTable entityNameKey='productDic' tableSchema={tableSchema} />
  );
};

export default ProductList;
