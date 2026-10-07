import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center'
  },
  loader: {
    color: '#dc004e',
    padding: '16px'
  }
});

export function Loader() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress thickness={7} size={120} className={classes.loader} />
    </Box>
  );
}
