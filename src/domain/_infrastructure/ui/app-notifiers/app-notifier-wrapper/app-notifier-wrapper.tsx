/* eslint-disable react/require-default-props */
import React from 'react';
import { Box, Snackbar, SnackbarProps, Alert, AlertProps } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  customBox: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 2,
    wordBreak: 'break-all',
    overflow: 'hidden'
  }
});

interface IProps {
  message: string;
  alertProps?: AlertProps;
  snackbarProps?: SnackbarProps;
}

const AppNotifierWrapper: React.FC<IProps> = ({
  message,
  alertProps,
  snackbarProps
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Snackbar {...snackbarProps}>
        <Alert {...alertProps}>
          <Box
            fontSize='h8.fontSize'
            component='div'
            className={classes.customBox}
          >
            {message}
          </Box>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AppNotifierWrapper;
