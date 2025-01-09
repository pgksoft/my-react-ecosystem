import React from 'react';
import { Avatar, Typography } from '@mui/material';
import ReactLogo from '../../../_images/logoReact.svg';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../domain/genius-space-courses/const/titles';

const ReactTitle = () => {
  return (
    <>
      <Avatar src={ReactLogo} sx={{ width: '28px', height: '28px' }} />
      <Typography
        sx={{
          alignSelf: 'center',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}
      >
        {TITLES_GENIUS_SPACE_COURSES.titleReact}
      </Typography>
    </>
  );
};

export default ReactTitle;
