import React, { FC } from 'react';
import { Box } from '@mui/material';
import { useStylesDialog } from '../../app-infrastructure/ui/style/style-dialog';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { LINKS_AUTH_USER } from '../../app-infrastructure/app-route/links';
import ShopList from '../../domain/el-if-tech-delivery/shops/model/shop-list';

const DeliveryShopPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.elIfTechDeliveryShops,
    LINKS_AUTH_USER.elIfTechDelivery
  );

  return (
    <Box className={classes.rootList}>
      <ShopList />
    </Box>
  );
};

export default DeliveryShopPage;
