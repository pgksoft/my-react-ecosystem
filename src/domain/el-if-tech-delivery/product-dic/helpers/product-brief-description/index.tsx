import React, { type ReactNode } from 'react';
import { Box, Typography, type TypographyVariant } from '@mui/material';
import getProductCategoryBriefDescription from '../../../product-category-dic/helpers/get-product-category-brief-description';
import type { TProduct } from '../../entity/product';

type TProductBriefDescriptionProps = {
  product: TProduct;
  variant?: TypographyVariant;
};

const ProductBriefDescription = ({
  product,
  variant = 'h6'
}: TProductBriefDescriptionProps): ReactNode => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: 1
      }}
      aria-description='product-brief-description'
    >
      <Typography variant={variant} noWrap>
        {product.name},
      </Typography>
      <Typography
        variant={variant}
        color='textSecondary'
        sx={{ fontStyle: 'italic', ml: 1, mr: 0.5 }}
      >
        Category:
      </Typography>
      <Typography variant={variant} noWrap>
        {getProductCategoryBriefDescription(product.category)},
      </Typography>
    </Box>
  );
};

export default ProductBriefDescription;
