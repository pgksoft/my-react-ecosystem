import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import {
  sxAppBarIconButton,
  sxShadowIconButton
} from '../../../app-ui/style/style-icon-button';
import useGetPathAndQuery from '../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import type { TPopupListRoute } from '../../../get-parameter-popups';
import type { TEntityToolPopup } from '../../entity-tools-types/t-entity-tool-types';

type TEntityToolPopupIconButton = {
  toolPopup: TEntityToolPopup;
  getIcon: () => JSX.Element;
  disabled: boolean;
  returnPopup?: TPopupListRoute;
};

const EntityToolPopupIconButton: FC<TEntityToolPopupIconButton> = (props) => {
  const { toolPopup, getIcon, disabled, returnPopup } = props;
  const { popup, title } = toolPopup;

  const { pathname, query } = useGetPathAndQuery();

  const url = buildQueryString(pathname, { ...query, popup, returnPopup });

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
