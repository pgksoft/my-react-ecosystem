/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import { Box, IconButton, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import SaveIcon from '@mui/icons-material/Save';
import { DefaultButton } from '../default-button/default-button';
import TITLES_BUTTON_CONFIRM from './const';
import useStylesPopupDialog from '../style/styles-popup-dialog';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    iconButton: {
      color: 'rgb(57, 203, 127)',
      '&:disable': {
        color: 'rgb(126, 126, 126)'
      }
    }
  });
});

interface IButtonConfirm {
  disabled: boolean;
  onClick: () => void;
  title?: string;
  isIconButton?: boolean;
}

export const ButtonConfirm: FC<IButtonConfirm> = ({
  disabled,
  onClick,
  title = TITLES_BUTTON_CONFIRM.create,
  isIconButton
}) => {
  const classes = useStylesPopupDialog();
  const classesLocal = useStyles();

  if (isIconButton) {
    return (
      <IconButton
        disabled={disabled}
        onClick={onClick}
        size='small'
        className={classesLocal.iconButton}
      >
        <SaveIcon />
      </IconButton>
    );
  }
  return (
    <Box className={classes.boxFooter}>
      <DefaultButton
        className={classes.colorPrimary}
        disabled={disabled}
        variant='contained'
        onClick={onClick}
      >
        {title}
      </DefaultButton>
    </Box>
  );
};
