import React, { type FC } from 'react';
import { Box } from '@mui/material';
import type TDialogRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-dialog-remove';
import type { IEntityMember } from '../../../../app-infrastructure/api-platform/app-entities/entity-member/entity-member';
import { useStylesDialog } from '../../../../app-infrastructure/app-ui/style/style-dialog';
import { isProduct } from '../entity/product';
import ProductBriefDescription from '../helpers/product-brief-description';

const ProductRemove: FC<TDialogRemove<IEntityMember>> = ({ entity }) => {
  const classes = useStylesDialog();

  return (
    <Box
      className={classes.rootPopupDialog}
      sx={{ justifyContent: 'flex-start' }}
    >
      {isProduct(entity) && <ProductBriefDescription product={entity} />}
    </Box>
  );
};

export default ProductRemove;
