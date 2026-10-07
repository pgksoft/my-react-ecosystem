/* eslint-disable @typescript-eslint/ban-types */
import React, { type ComponentType } from 'react';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import SvgIcon, {
  type SvgIconProps,
  type SvgIconTypeMap
} from '@mui/material/SvgIcon';

type TSvgReactComponent = ComponentType<React.SVGProps<SVGSVGElement>>;
type TSvgIconComponent = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
};

const createSvgIconSimpleComponent = (
  Icon: TSvgReactComponent,
  muiName: string
): TSvgIconComponent => {
  const SvgIconComponent = (props: SvgIconProps) => {
    return (
      <SvgIcon {...props}>
        <Icon />
      </SvgIcon>
    );
  };
  SvgIconComponent.muiName = muiName;
  return SvgIconComponent;
};

export default createSvgIconSimpleComponent;
