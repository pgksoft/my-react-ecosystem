import React, { FC, useEffect, useState } from 'react';
import type TEntityList from '../../../../app-infrastructure/get-parameter-popups/dialog-list/t-choice-popup-list/t-entity-list';
import type { TTableSchema } from '../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import useCachingDataInSessionStorage from '../../../../app-infrastructure/app-hook-helpers/caching-data-in-session-storage.hook.ts';
import {
  isProductCategory,
  type TProductCategory
} from '../../product-category-dic/entity/product-category';
import { isShop, type TShop } from '../../shops/entity/shops';
import BuildEntityTable from '../../../../app-infrastructure/build-entity-table/model/build-entity-table';
import productsInStoresTableSchema from '../const/products-in-stores-table-schema';
import { defineItemsCheckboxColumn } from '../../../../app-infrastructure/build-entity-table/helpers/define-items-checkbox-column';
import getProductCategoryColumnCheckboxItems from '../../product-category-dic/helpers/get-product-category-column-checkbox-items';
import getShopColumnCheckboxItems from '../../shops/helpers/get-shop-column-checkbox-items';

const ProductsInStoreList: FC<TEntityList> = ({ mountedPopup = undefined }) => {
  const [tableSchema, setTableSchema] = useState<TTableSchema>([]);

  const productCategories = useCachingDataInSessionStorage<TProductCategory>({
    entityNameKey: 'productCategoryDic',
    isEntityGuard: isProductCategory
  });

  const shops = useCachingDataInSessionStorage<TShop>({
    entityNameKey: 'shop',
    isEntityGuard: isShop
  });

  useEffect(() => {
    let newTableSchema: TTableSchema = productsInStoresTableSchema;
    if (productCategories) {
      newTableSchema = defineItemsCheckboxColumn(
        productsInStoresTableSchema,
        getProductCategoryColumnCheckboxItems(productCategories),
        'product.category.name'
      );
    }
    if (shops) {
      newTableSchema = defineItemsCheckboxColumn(
        newTableSchema as typeof productsInStoresTableSchema,
        getShopColumnCheckboxItems(shops),
        'shop.name'
      );
    }
    setTableSchema(newTableSchema);
  }, [productCategories, shops]);

  if (tableSchema.length === 0) return null;

  return (
    <BuildEntityTable
      entityNameKey='shopProduct'
      tableSchema={tableSchema}
      returnPopup={mountedPopup}
    />
  );
};

export default ProductsInStoreList;
