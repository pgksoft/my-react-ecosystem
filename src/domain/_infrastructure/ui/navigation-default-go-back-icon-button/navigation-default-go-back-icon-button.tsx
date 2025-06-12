/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {
  sxAppBarIconButton,
  sxShadowIconButton
} from '../style/style-icon-button';
import useAppSelector from '../../../../store/use-app-selector';
import { appPageLinksValueSelector } from '../../../../redux-toolkit/app-page-links/app-page-links-selectors';

const NavigationDefaultGoBackIconButton: FC = () => {
  const { activeParentLink } = useAppSelector(appPageLinksValueSelector);

  return (
    <IconButton
      sx={[{ mr: '0.3%' }, sxShadowIconButton, sxAppBarIconButton]}
      color='inherit'
      component={Link}
      to={activeParentLink.appRoute}
      size='small'
    >
      <NavigateBeforeIcon />
    </IconButton>
  );
};

export default NavigationDefaultGoBackIconButton;
