import React, { ReactNode } from 'react';
import { isProductsInShops } from '../../entity/products-in-stores';
import { ProductsInShopsImageView } from '../products-in-shops-image-view';

const ProductsInShopsImageListView = (
  value: unknown,
  data?: unknown
): ReactNode => {
  if (!(typeof value === 'string' && isProductsInShops(data))) {
    throw new Error('is not a Shop-products entity');
  }

  return <ProductsInShopsImageView id={data.id} />;
};

export default ProductsInShopsImageListView;
