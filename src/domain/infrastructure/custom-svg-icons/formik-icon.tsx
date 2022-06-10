import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as FormikSvgIcon } from '../../../_images/formik.svg';

export function FormikIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <FormikSvgIcon />
    </SvgIcon>
  );
}
