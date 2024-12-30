import React from 'react';
import { Avatar, Typography } from '@mui/material';
import HtmlCssLogo from '../../../_images/genius-space/html+css logo.png';
import { TITLES_GENIUS_SPACE_COURSES } from '../../../domain/genius-space-courses/const/titles';

const HtmlCssTitle = () => {
  return (
    <>
      <Avatar
        src={HtmlCssLogo}
        sx={{ width: 55, height: 30 }}
        variant='rounded'
      />
      <Typography
        sx={{
          alignSelf: 'center',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}
      >
        {TITLES_GENIUS_SPACE_COURSES.titleHtmlCss}
      </Typography>
    </>
  );
};

export default HtmlCssTitle;
