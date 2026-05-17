import React, { type FC } from 'react';
import { useStylesDialog } from '../../app-infrastructure/ui/style/style-dialog';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { LINKS_AUTH_USER } from '../../app-infrastructure/app-route/links';
import { Box } from '@mui/material';
import ProductList from '../../domain/el-if-tech-delivery/product-dic/model/product-list';

const DeliveryProductPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.elIfTechDeliveryProductDic,
    LINKS_AUTH_USER.elIfTechDelivery
  );

  return (
    <Box className={classes.rootList}>
      <ProductList />
    </Box>
  );
};

export default DeliveryProductPage;
