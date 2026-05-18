import React, { FC } from 'react';
import { Box } from '@mui/material';
import { useStylesDialog } from '../../app-infrastructure/ui/style/style-dialog';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { LINKS_AUTH_USER } from '../../app-infrastructure/app-route/links';
import ProductCategoryList from '../../domain/el-if-tech-delivery/product-category-dic/model/product-category-list';

const DeliveryProductCategoryPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.elIfTechDeliveryProductCategoryDic,
    LINKS_AUTH_USER.elIfTechDelivery
  );

  return (
    <Box className={classes.rootList}>
      <ProductCategoryList />
    </Box>
  );
};

export default DeliveryProductCategoryPage;
