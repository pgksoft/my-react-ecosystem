import React from 'react';
import { Avatar, Typography } from '@mui/material';
import SrcIcon from '../../../_images/genius-space/js-logo.png';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../domain/genius-space-courses/const/titles';

const JSTitle = () => {
  return (
    <>
      <Avatar src={SrcIcon} variant='rounded' sx={{ width: 30, height: 30 }} />
      <Typography
        sx={{ alignSelf: 'center', fontSize: '0.9rem', fontWeight: '600' }}
      >
        {TITLES_GENIUS_SPACE_COURSES.titleJS}
      </Typography>
    </>
  );
};

export default JSTitle;
