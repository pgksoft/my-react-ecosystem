/* eslint-disable react/require-default-props */
import React from 'react';
import clsx from 'clsx';
import { Box, IconButton, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import { COLORS } from '../../../_const/colors';

const styles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      marginBottom: '12px',
      padding: '4px',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      boxSizing: 'border-box',
      borderBottom: '1px solid gray'
    },
    backgroundTitleNorm: {
      background: 'hsl(210,100%,93%)'
    },
    backgroundTitleAlarm: {
      background: 'hsl(0,100%,90%)'
    },
    closeButton: {
      boxSizing: 'border-box',
      '&:hover': {
        '&.MuiIconButton-root': {
          backgroundColor: `${COLORS.secondary}`
        },
        color: '#fff'
      },
      '@media print': {
        display: 'none !important'
      }
    },
    titleBox: {
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 2,
      wordBreak: 'break-all',
      overflow: 'hidden'
    }
  });
});

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
  const classes = styles();

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
