import React, { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

type TSvgIconComponent = { Icon: SvgIconComponent };

type TSvgIconWrapperProps = TSvgIconComponent & SvgIconProps;

const SvgIconWrapper: FC<TSvgIconWrapperProps> = (props) => {
  const { Icon, ...rest } = props;
  return (
    <SvgIcon {...rest}>
      <Icon />
    </SvgIcon>
  );
};

export default SvgIconWrapper;
