import React, { type FC } from 'react';
import { Rating, Stack, Typography, type RatingProps } from '@mui/material';
import { getCheckRating } from '../../../domain/el-if-tech-delivery/shops/helpers/get-check-rating';

const RatingView: FC<RatingProps> = (props) => {
  if (!props.defaultValue) return null;

  const { defaultValue, ...rest } = props;

  const checkRating = getCheckRating(defaultValue);
  return (
    <Stack direction='row' spacing={1}>
      <Rating
        defaultValue={defaultValue / 10}
        precision={0.1}
        readOnly
        {...rest}
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

export default RatingView;
