import React, { type FC } from 'react';
import { Avatar, type Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import apiEntityUrl from '../../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import resolveBaseUrl from '../../../../../app-infrastructure/api-platform/app-entities/resolve-base-url';

type TProductsInShopsImageView = {
  id: string;
  mutationDate: string;
  sxAvatar?: SystemStyleObject<Theme>;
  sxAvatarImg?: SystemStyleObject<Theme>;
};

export const ProductsInShopsImageView: FC<TProductsInShopsImageView> = ({
  id,
  mutationDate,
  sxAvatar,
  sxAvatarImg
}) => {
  const url = apiEntityUrl.shopProduct;
  const baseURL = resolveBaseUrl('shopProduct');
  const src = `${baseURL}${url}/${id}/image?v=${mutationDate}`;

  return (
    <Avatar
      src={src}
      variant='square'
      sx={{
        width: 64,
        '& .MuiAvatar-img': {
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          ...sxAvatarImg
        },
        ...sxAvatar
      }}
    />
  );
};
