import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    navLink: {
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      outline: '0px',
      border: '0px',
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      appearance: 'none',
      display: 'flex',
      alignItems: 'flex-end',
      color: 'inherit',
      WebkitBoxPack: 'start',
      justifyContent: 'flex-start',
      WebkitBoxAlign: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '8px 16px',
      transition: '0.3s',
      borderRadius: '9px',
      paddingTop: '4px',
      paddingBottom: '4px',
      '&>:nth-child(2)': {
        paddingLeft: '8px'
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      },
      '&:active': {
        background: 'rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box'
      }
    }
  });
});

export default useStyles;
