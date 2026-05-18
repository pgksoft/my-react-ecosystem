import React, { type FC } from 'react';
import apiEntityUrl from '../../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import resolveBaseUrl from '../../../../../app-infrastructure/api-platform/app-entities/resolve-base-url';
import { Avatar } from '@mui/material';

type TProductsInShopsImageView = { id: string };

export const ProductsInShopsImageView: FC<TProductsInShopsImageView> = ({
  id
}) => {
  const url = apiEntityUrl.shopProduct;
  const baseURL = resolveBaseUrl('shopProduct');
  const src = `${baseURL}${url}/${id}/image`;

  return <Avatar src={src} variant='square' />;
};
