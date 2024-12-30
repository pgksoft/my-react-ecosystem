import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as GeniusLogoSvgIcon } from '../../../_images/genius-space/genius-logo.svg';

function GeniusLogoIcon() {
  return (
    <SvgIcon
      sx={{
        width: 600,
        height: 200
      }}
    >
      <GeniusLogoSvgIcon />
    </SvgIcon>
  );
}

export default GeniusLogoIcon;
