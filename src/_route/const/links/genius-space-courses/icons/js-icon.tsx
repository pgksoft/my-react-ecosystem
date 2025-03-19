import React from 'react';
import { Avatar } from '@mui/material';
import JsLogo from '../../../../../_images/genius-space/js-logo.png';

const JsIcon = () => {
  return (
    <Avatar src={JsLogo} sx={{ width: 26, height: 26 }} variant='rounded' />
  );
};

export default JsIcon;
