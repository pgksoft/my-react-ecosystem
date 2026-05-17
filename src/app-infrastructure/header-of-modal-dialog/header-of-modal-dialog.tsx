/* eslint-disable react/require-default-props */
import React from 'react';
import clsx from 'clsx';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styleHeaderDialog from '../ui/style/style-header-dialog';

type THeaderOfModalDialogProps = {
  title: string;
  onClose?: () => void;
  background?: 'norm' | 'alarm';
};

export const HeaderOfModalDialog: React.FC<THeaderOfModalDialogProps> = ({
  title,
  onClose,
  background = 'norm'
}) => {
  const classes = styleHeaderDialog();

  return (
    <Box
      className={clsx({
        [classes.root]: true,
        [classes.backgroundTitleNorm]: background === 'norm',
        [classes.backgroundTitleAlarm]: background === 'alarm'
      })}
    >
      <Box fontSize='h6.fontSize' className={classes.titleBox}>
        {title}
      </Box>
      <IconButton
        className={classes.closeButton}
        onClick={onClose}
        size='small'
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
