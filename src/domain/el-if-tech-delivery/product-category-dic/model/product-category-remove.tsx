import React, { FC } from 'react';
import type TDialogRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-dialog-remove';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import { useStylesDialog } from '../../../../app-infrastructure/app-ui/style/style-dialog';
import { getInitialDetailProductCategoryDto } from '../entity/product-category';
import { Box, Typography } from '@mui/material';
import TITLES_DELIVERY_PRODUCT_CATEGORY from '../const/titles';
import getProductCategoryBriefDescription from '../helpers/get-product-category-brief-description';

const ProductCategoryRemove: FC<TDialogRemove<IEntityMember>> = ({
  entity
}) => {
  const classes = useStylesDialog();

  const productCategoryDto = getInitialDetailProductCategoryDto({
    isSerialization: false,
    entity
  }).validationDto;

  return (
    <Box
      className={classes.rootPopupDialog}
      sx={{ justifyContent: 'flex-start' }}
    >
      <Typography color='textSecondary' whiteSpace='nowrap'>
        {TITLES_DELIVERY_PRODUCT_CATEGORY.title}:
      </Typography>
      &nbsp;
      <Typography>
        {getProductCategoryBriefDescription(productCategoryDto)}
      </Typography>
    </Box>
  );
};

export default ProductCategoryRemove;
