/* eslint-disable react/require-default-props */
import React, { FC, type ComponentType } from 'react';
import { Box, IconButton, type SvgIconProps } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { DefaultButton } from '../default-button/default-button';
import TITLES_BUTTON_CONFIRM from './const';
import { useStylesDialog } from '../style/style-dialog';
import { COLORS } from '../../app-const/colors';

type IButtonConfirm = {
  disabled: boolean;
  onClick: () => void;
  title?: string;
  isIconButton?: boolean;
  icon?: ComponentType<SvgIconProps>;
};

export const ButtonConfirm: FC<IButtonConfirm> = ({
  disabled,
  onClick,
  title = TITLES_BUTTON_CONFIRM.create,
  isIconButton,
  icon: Icon = SaveIcon
}) => {
  const classes = useStylesDialog();

  if (isIconButton) {
    return (
      <IconButton
        aria-label='confirm'
        disabled={disabled}
        onClick={onClick}
        size='small'
        sx={{
          boxSizing: 'border-box',
          color: `${COLORS.green}`,
          '&:disable': {
            color: `${COLORS.gray}`
          },
          '&:hover': {
            '&.MuiIconButton-root': {
              backgroundColor: `${COLORS.green}`,
              color: `${COLORS.white}`
            },
            color: '#fff'
          }
        }}
      >
        <Icon />
      </IconButton>
    );
  }
  return (
    <Box className={classes.boxFooter}>
      <DefaultButton
        sx={{ color: COLORS.primaryLight }}
        disabled={disabled}
        variant='contained'
        onClick={onClick}
      >
        {title}
      </DefaultButton>
    </Box>
  );
};
