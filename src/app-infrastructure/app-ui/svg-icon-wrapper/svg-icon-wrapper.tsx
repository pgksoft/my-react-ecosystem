import React, { FC, type SVGProps } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

type TSvgIconComponent = { Icon: FC<SVGProps<SVGSVGElement>> };

type TSvgIconWrapperProps = TSvgIconComponent & SvgIconProps;

const SvgIconWrapper: FC<TSvgIconWrapperProps> = ({ Icon, ...rest }) => {
  return (
    <SvgIcon {...rest}>
      <Icon />
    </SvgIcon>
  );
};

export default SvgIconWrapper;
