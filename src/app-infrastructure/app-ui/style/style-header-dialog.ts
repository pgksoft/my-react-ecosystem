import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { COLORS } from '../../app-const/colors';

const styleHeaderDialog = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '4px',
      paddingLeft: '8px',
      paddingRight: '8px',
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

export default styleHeaderDialog;
