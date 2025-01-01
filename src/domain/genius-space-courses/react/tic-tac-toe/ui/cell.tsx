import React, { FC } from 'react';
import { Avatar } from '@mui/material';

type TCellProps = { src: string };

const Cell: FC<TCellProps> = ({ src }) => {
  return (
    <Avatar src={src} sx={{ width: '77%', height: '77%' }} variant='rounded' />
  );
};

export default Cell;
