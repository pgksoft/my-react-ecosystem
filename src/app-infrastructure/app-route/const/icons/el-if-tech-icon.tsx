import React from 'react';
import { Avatar } from '@mui/material';
import LogoElIfTech from '../../../app-images/logo-eliftech.svg';

export const ElIfTechIcon = () => {
  return (
    <Avatar src={LogoElIfTech} sx={{ width: 36, height: 36, padding: 0.7 }} />
  );
};
