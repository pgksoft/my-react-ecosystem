import React, { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';

export const TransitionSlideUp = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, never>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
