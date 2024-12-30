import React from 'react';
import { Avatar, Typography } from '@mui/material';
import NodeJSShortLogo from '../../../_images/genius-space/node-js-short-logo.png';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../domain/genius-space-courses/const/titles';

const NodeJSTitle = () => {
  return (
    <>
      <Avatar
        src={NodeJSShortLogo}
        sx={{ width: 30, height: 30 }}
        variant='rounded'
      />
      <Typography
        sx={{
          alignSelf: 'center',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}
      >
        {TITLES_GENIUS_SPACE_COURSES.titleNodeJS}
      </Typography>
    </>
  );
};

export default NodeJSTitle;
