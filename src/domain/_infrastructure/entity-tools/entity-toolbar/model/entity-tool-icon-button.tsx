import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import {
  sxAppBarIconButton,
  sxShadowIconButton
} from '../../../ui/style/style-icon-button';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TEntityToolName from '../../entity-tools-types/t-entity-tool-names';
import useBuildUrl from '../../../../../_hooks/get-parameter.hooks/build-url.hook';
import TEntityToolPopup from '../../entity-tools-types/t-entity-tool-popup';

type TEntityToolIconButton = {
  entityNameKey: TEntityNameKeys;
  toolName: TEntityToolName;
  toolPopup: TEntityToolPopup;
  getIcon: () => JSX.Element;
};

const EntityToolIconButton: FC<TEntityToolIconButton> = (props) => {
  const { entityNameKey, toolName, toolPopup, getIcon } = props;
  const { popup, title } = toolPopup;
  const url = useBuildUrl({ popup });

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
      >
        {getIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default EntityToolIconButton;
