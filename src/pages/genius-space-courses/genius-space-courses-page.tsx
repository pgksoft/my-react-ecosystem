import React, { FC } from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import GeniusLogoIcon from './ui/genius-logo-icon';
import { TITLES_GENIUS_SPACE_COURSES } from '../../domain/genius-space-courses/const/titles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      width: '100%',
      padding: '16px',
      height: '100%',
      wordBreak: 'break-word',
      flexDirection: 'column'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '24px'
    }
  });
});

const GeniusSpaceCoursesPage: FC = () => {
  const classes = useStyles();

  const link = LINKS_AUTH_USER.geniusSpaceCourses;

  useActivePageLinks(link, LINKS_AUTH_USER.geniusSpaceCourses);

  return (
    <Box className={classes.root} sx={{ overflow: 'auto' }}>
      <Box className={classes.section}>
        <GeniusLogoIcon />
        <Typography
          color='primary'
          fontSize='5rem'
          fontWeight='800'
          letterSpacing='10px'
          sx={{
            textShadow:
              '-1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow, 2px 2px 5px blue'
          }}
        >
          {TITLES_GENIUS_SPACE_COURSES.courseName}
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography fontSize='1.5rem'>
          {TITLES_GENIUS_SPACE_COURSES.technologyStack}
        </Typography>
      </Box>
    </Box>
  );
};

export default GeniusSpaceCoursesPage;
