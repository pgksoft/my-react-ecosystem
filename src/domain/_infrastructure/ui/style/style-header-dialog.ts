import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { COLORS } from '../../../../_const/colors';

const styleHeaderDialog = makeStyles((theme: Theme) => {
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

export default styleHeaderDialog;

// const styles = makeStyles((theme: Theme) => {
//   return createStyles({
//     root: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       flexWrap: 'nowrap',
//       alignItems: 'flex-start',
//       marginBottom: '12px',
//       padding: '4px',
//       paddingLeft: theme.spacing(2),
//       paddingRight: theme.spacing(1),
//       boxSizing: 'border-box',
//       borderBottom: '1px solid gray'
//     },
//     backgroundTitleNorm: {
//       background: 'hsl(210,100%,93%)'
//     },
//     backgroundTitleAlarm: {
//       background: 'hsl(0,100%,90%)'
//     },
//     closeButton: {
//       '&:hover': {
//         backgroundColor: '#dc004e',
//         color: '#fff'
//       },
//       '@media print': {
//         display: 'none !important'
//       }
//     },
//     customBox: {
//       display: '-webkit-box',
//       boxOrient: 'vertical',
//       lineClamp: 2,
//       wordBreak: 'break-all',
//       overflow: 'hidden'
//     }
//   });
// });
