/* eslint-disable react/require-default-props */
import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useStyleIconButton } from '../style/style-icon-button';
import { RouteContext } from '../../../../context/route-context';
import TIconColor from '../../types/t-icon-color';

type TIconButtonProps = {
  isShadow?: boolean;
  iconColor?: TIconColor;
};

const NavigationDefaultGoBackIconButton: FC<TIconButtonProps> = ({
  isShadow = true,
  iconColor = 'inherit'
}) => {
  const classesIconButton = useStyleIconButton();

  const { activeMainLink } = useContext(RouteContext);

  return (
    <IconButton
      className={clsx({
        [classesIconButton.iconButton]: true,
        [classesIconButton.shadow]: isShadow
      })}
      component={Link}
      to={activeMainLink.url}
      size='small'
      color={iconColor}
      sx={{ mr: '0.3%' }}
    >
      <NavigateBeforeIcon />
    </IconButton>
  );
};

export default NavigationDefaultGoBackIconButton;
