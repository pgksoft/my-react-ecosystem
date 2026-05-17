import React from 'react';
import { Avatar } from '@mui/material';
import ReactLogo from '../../../../../app-images/logoReact.svg';

const ReactIcon = () => {
  return <Avatar src={ReactLogo} sx={{ width: 28, height: 28 }} />;
};

export default ReactIcon;
