import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';

export const TransitionSlideUp = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction='up' ref={ref} {...props} />;
  }
);
