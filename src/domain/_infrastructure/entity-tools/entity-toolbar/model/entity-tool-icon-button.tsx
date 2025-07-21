import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import {
  sxAppBarIconButton,
  sxShadowIconButton
} from '../../../ui/style/style-icon-button';
import useBuildUrl from '../../../../../_hooks/get-parameter.hooks/build-url.hook';
import TEntityToolPopup from '../../entity-tools-types/t-entity-tool-popup';

type TEntityToolIconButton = {
  toolPopup: TEntityToolPopup;
  getIcon: () => JSX.Element;
  disabled: boolean;
};

const EntityToolIconButton: FC<TEntityToolIconButton> = (props) => {
  const { toolPopup, getIcon, disabled } = props;
  const { popup, title } = toolPopup;

  const url = useBuildUrl({ getParameters: { popup } });

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

export default EntityToolIconButton;
