import React from 'react';
import { Avatar } from '@mui/material';
import HtmlCssLogo from '../../../../../app-images/genius-space/html+css logo.png';

const HtmlCssIcon = () => {
  return (
    <Avatar
      src={HtmlCssLogo}
      sx={{ width: 55, height: 30 }}
      variant='rounded'
    />
  );
};

export default HtmlCssIcon;
