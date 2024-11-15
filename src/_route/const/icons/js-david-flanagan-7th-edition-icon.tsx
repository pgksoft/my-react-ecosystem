import React from 'react';
import { Avatar } from '@mui/material';
import SrcIcon from '../../../_images/js-david-flanagan-7th-edition.jpg';

export const JsDavidFlanagan7thEditionIcon = () => {
  return (
    <Avatar
      variant='rounded'
      sx={{
        marginLeft: -1,
        height: 48,
        width: 48,
        boxSizing: 'border-box',
        border: `1px solid lightgray}`
      }}
      src={SrcIcon}
    />
  );
};
