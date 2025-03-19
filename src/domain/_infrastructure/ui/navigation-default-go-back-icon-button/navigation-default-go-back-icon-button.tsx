/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import clsx from 'clsx';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useStyleIconButton } from '../style/style-icon-button';
import TIconColor from '../../types/t-icon-color';
import useAppSelector from '../../../../store/use-app-selector';
import { appPageLinksValueSelector } from '../../../../redux-toolkit/app-page-links/app-page-links-selectors';

type TIconButtonProps = {
  isShadow?: boolean;
  iconColor?: TIconColor;
};

const NavigationDefaultGoBackIconButton: FC<TIconButtonProps> = ({
  isShadow = true,
  iconColor = 'inherit'
}) => {
  const classesIconButton = useStyleIconButton();

  const { activeParentLink } = useAppSelector(appPageLinksValueSelector);

  return (
    <IconButton
      className={clsx({
        [classesIconButton.iconButton]: true,
        [classesIconButton.shadow]: isShadow
      })}
      component={Link}
      to={activeParentLink.url}
      size='small'
      color={iconColor}
      sx={{ mr: '0.3%' }}
    >
      <NavigateBeforeIcon />
    </IconButton>
  );
};

export default NavigationDefaultGoBackIconButton;
