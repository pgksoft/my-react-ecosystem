import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { COLORS } from '../../../../_const/colors';

export const useStyleIconButton = makeStyles((theme: Theme) => {
  return createStyles({
    iconButton: {
      boxSizing: 'border-box',
      color: COLORS.primaryLight,
      backgroundColor: 'rgb(234,234,234)',
      '&:hover': {
        backgroundColor: 'rgb(220,220,220)'
      }
    },
    shadow: {
      boxShadow:
        '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
    }
  });
});
