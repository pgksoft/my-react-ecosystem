import React, { type ReactNode } from 'react';
import { Box, Typography, type TypographyVariant } from '@mui/material';
import type { TProductsInStores } from '../../entity/products-in-stores';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from '../../const/titles';

type TProductInStoresBriefDescriptionProps = {
  productInStores: TProductsInStores;
  variant?: TypographyVariant;
};

const ProductInStoresBriefDescription = (
  props: TProductInStoresBriefDescriptionProps
): ReactNode => {
  const { productInStores, variant = 'h6' } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: 1
      }}
      aria-description='product-in-stores-brief-description'
    >
      <Typography
        variant={variant}
        color='textSecondary'
        sx={{ fontStyle: 'italic', ml: 1, mr: 0.5 }}
      >
        {TITLES_DELIVERY_PRODUCTS_IN_STORES.product}:
      </Typography>
      <Typography variant={variant} noWrap>
        {productInStores.product.name},
      </Typography>
      <Typography
        variant={variant}
        color='textSecondary'
        sx={{ fontStyle: 'italic', ml: 1, mr: 0.5 }}
      >
        {TITLES_DELIVERY_PRODUCTS_IN_STORES.store}:
      </Typography>
      <Typography variant={variant} noWrap>
        {productInStores.shop.name},
      </Typography>
    </Box>
  );
};

export default ProductInStoresBriefDescription;
