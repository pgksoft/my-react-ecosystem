import React, { type FC, type ReactNode } from 'react';
import type TIconColor from '../../app-types/t-icon-color';
import { IconButton, Tooltip } from '@mui/material';
import {
  sxAppBarIconButton,
  sxShadowIconButton
} from '../../app-ui/style/style-icon-button';

export type TBaseCommandIconButtonProps = {
  icon: ReactNode;
  title: string;
  shadow?: boolean;
  disabled?: boolean;
  iconColor?: TIconColor;
};

export type TCommandIconButtonProps = TBaseCommandIconButtonProps & {
  onClick: () => void;
};

const CommandIconButton: FC<TCommandIconButtonProps> = ({
  icon,
  title,
  onClick,
  shadow = true,
  disabled = false,
  iconColor = 'primary'
}) => {
  const child = (
    <IconButton
      sx={[sxAppBarIconButton, shadow ? { ...sxShadowIconButton } : {}]}
      onClick={onClick}
      size='small'
      disabled={disabled}
      color={iconColor}
    >
      {icon}
    </IconButton>
  );

  return (
    <Tooltip
      title={title}
      placement='top'
      enterDelay={300}
      enterNextDelay={1000}
    >
      {disabled ? (
        <span style={{ display: 'inline-block' }}>{child}</span>
      ) : (
        child
      )}
    </Tooltip>
  );
};

export default CommandIconButton;
