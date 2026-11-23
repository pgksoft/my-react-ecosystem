import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import {
  sxAppBarIconButton,
  sxShadowIconButton
} from '../../../app-ui/style/style-icon-button';

type TEntityToolPopupIconButton = {
  url: string;
  title: string;
  getIcon: () => JSX.Element;
  disabled: boolean;
};

const EntityToolPopupIconButton: FC<TEntityToolPopupIconButton> = (props) => {
  const { url, title, getIcon, disabled } = props;

  return (
    <Tooltip
      title={title}
      placement='top'
      enterDelay={300}
      enterNextDelay={1000}
    >
      <IconButton
        sx={[sxShadowIconButton, sxAppBarIconButton]}
        color='inherit'
        component={Link}
        size='small'
        to={url}
        disabled={disabled}
      >
        {getIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default EntityToolPopupIconButton;
