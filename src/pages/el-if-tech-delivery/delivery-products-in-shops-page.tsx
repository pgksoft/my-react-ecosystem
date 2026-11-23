import React, { type FC } from 'react';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { LINKS_AUTH_USER } from '../../app-infrastructure/app-route/links';
import { Box } from '@mui/material';
import ProductsInStoreList from '../../domain/el-if-tech-delivery/products-in-stores/model/products-in-stores-list';
import { useStylesDialog } from '../../app-infrastructure/app-ui/style/style-dialog';
import useResolveEntityGetRequestParams from '../../app-infrastructure/app-hook-helpers/resolve-entity-get-request-params.hook.ts';

const DeliveryProductsInShopsPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.elIfTechDeliveryProductsInStores,
    LINKS_AUTH_USER.elIfTechDelivery
  );

  const { isResolved } = useResolveEntityGetRequestParams({
    entityNameKey: 'shopProduct'
  });

  if (!isResolved) return null;

  return (
    <Box className={classes.rootList} aria-description='root-list'>
      <ProductsInStoreList />
    </Box>
  );
};

export default DeliveryProductsInShopsPage;
