import React from 'react';
import LogoElIfTech from '../../../app-infrastructure/app-images/logo-eliftech.svg';
import { Avatar } from '@mui/material';

export const ElIfTechLogoIcon = () => {
  return (
    <Avatar src={LogoElIfTech} sx={{ width: 100, height: 100, padding: 2 }} />
  );
};

export default ElIfTechLogoIcon;
