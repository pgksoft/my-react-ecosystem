import React, { type ReactNode } from 'react';
import type { TShop } from '../../entity/shops';
import RatingView from '../../../../../app-infrastructure/app-ui/rating-view';
import { Box, Typography, type TypographyVariant } from '@mui/material';

type TBriefDescriptionProps = { shop: TShop; variant?: TypographyVariant };

const ShopBriefDescription = ({
  shop,
  variant = 'h6'
}: TBriefDescriptionProps): ReactNode => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: 1
      }}
      aria-description='shop-brief-description'
    >
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant={variant} noWrap>
          {shop.name},
        </Typography>
      </Box>
      <RatingView defaultValue={shop.rating} />
    </Box>
  );
};

export default ShopBriefDescription;
