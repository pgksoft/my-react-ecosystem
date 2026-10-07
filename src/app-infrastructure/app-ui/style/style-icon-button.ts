import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { COLORS } from '../../app-const/colors';

export const sxIconButton: SystemStyleObject<Theme> = {
  boxSizing: 'border-box',
  color: COLORS.primaryLight,
  backgroundColor: 'rgb(234,234,234)',
  '&:hover': {
    backgroundColor: 'rgb(220,220,220)'
  }
};

export const sxShadowIconButton: SystemStyleObject<Theme> = {
  boxShadow:
    '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
};

export const sxAppBarIconButton: SystemStyleObject<Theme> = {
  backgroundColor: 'rgb(255  255  255  / 14%)',
  '&:hover': { backgroundColor: 'rgb(255  255  255  / 7%)' }
};
