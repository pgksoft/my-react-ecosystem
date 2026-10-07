import React, { type FC } from 'react';
import type TDialogRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-dialog-remove';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import { isProductsInShops } from '../entity/products-in-stores';
import { Grid, Stack, Typography } from '@mui/material';
import ProductBriefDescription from '../../product-dic/helpers/product-brief-description';
import ShopBriefDescription from '../../shops/ui/shop-brief-description';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from '../const/titles';
import getPriceToShow from '../../../../app-infrastructure/app-helpers/get-price-to-show';
import { ProductsInShopsImageView } from '../ui/products-in-shops-image-view';
import toISOStringLocaleTime from '../../../../app-infrastructure/app-helpers/to-iso-string-locale-time';

const ProductInStoresRemove: FC<TDialogRemove<IEntityMember>> = ({
  entity
}) => {
  if (!isProductsInShops(entity)) return null;
  return (
    <Grid container spacing={1}>
      <Grid size={10}>
        <Stack direction='column' spacing={1} flexWrap='wrap'>
          <ProductBriefDescription product={entity.product} variant='body1' />
          <ShopBriefDescription shop={entity.shop} variant='body1' />
          <Stack direction='row' spacing={1} flexWrap='wrap'>
            <Typography color='textSecondary' sx={{ fontStyle: 'italic' }}>
              {TITLES_DELIVERY_PRODUCTS_IN_STORES.price}:
            </Typography>
            <Typography>{getPriceToShow(entity.price)}</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid size={2} alignContent='center' alignItems='center'>
        <ProductsInShopsImageView
          id={entity.id}
          mutationDate={toISOStringLocaleTime(entity.mutationDate)}
          sxAvatar={{ height: 80, width: 80 }}
        />
      </Grid>
    </Grid>
  );
};

export default ProductInStoresRemove;
