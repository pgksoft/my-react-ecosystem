import React, { FC } from 'react';
import { Rating, Stack, Typography } from '@mui/material';
import TITLES_DELIVERY_SHOPS from '../../../const/titles';
import { getCheckRating } from '../../../helpers/get-check-rating';

type TShopRatingViewProps = { rating: number };

export const ShopRatingView: FC<TShopRatingViewProps> = ({ rating }) => {
  const checkRating = getCheckRating(rating);
  return (
    <Stack direction='row' spacing={1}>
      <Rating
        defaultValue={rating / 10}
        precision={0.1}
        readOnly
        name={TITLES_DELIVERY_SHOPS.rating}
      />
      <Typography
        component='legend'
        color={checkRating.color}
        sx={{ fontWeight: '600' }}
        noWrap={true}
      >
        {checkRating.label}
      </Typography>
    </Stack>
  );
};
