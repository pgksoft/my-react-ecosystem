import React from 'react';
import { Avatar } from '@mui/material';
import NodeJSShortLogo from '../../../../../_images/genius-space/node-js-short-logo.png';

const NodeJsIcon = () => {
  return (
    <Avatar
      src={NodeJSShortLogo}
      sx={{ width: 30, height: 28 }}
      variant='rounded'
    />
  );
};

export default NodeJsIcon;
