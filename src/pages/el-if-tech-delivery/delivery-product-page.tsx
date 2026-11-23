import React, { type FC } from 'react';
import { useStylesDialog } from '../../app-infrastructure/app-ui/style/style-dialog';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { LINKS_AUTH_USER } from '../../app-infrastructure/app-route/links';
import { Box } from '@mui/material';
import ProductList from '../../domain/el-if-tech-delivery/product-dic/model/product-list';
import useResolveEntityGetRequestParams from '../../app-infrastructure/app-hook-helpers/resolve-entity-get-request-params.hook.ts';

const DeliveryProductPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.elIfTechDeliveryProductDic,
    LINKS_AUTH_USER.elIfTechDelivery
  );

  const { isResolved } = useResolveEntityGetRequestParams({
    entityNameKey: 'productDic'
  });

  if (!isResolved) return null;

  return (
    <Box className={classes.rootList} aria-description='root-list'>
      <ProductList />
    </Box>
  );
};

export default DeliveryProductPage;
