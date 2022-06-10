import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';

// eslint-disable-next-line prefer-arrow-callback
export const TransitionSlideUp = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
