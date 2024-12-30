import React, { FC } from 'react';
import { Avatar, Box, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { usePageContext } from '../hooks/page-context.hook';
import NodeJSLogo from '../../_images/genius-space/node-js-logo.png';

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
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '24px'
    },
    avatarSize: { width: 100, height: 100 }
  });
});

const GeniusSpaceCoursesNodeJSPage: FC = () => {
  const classes = useStyles();

  const link = LINKS_AUTH_USER.geniusSpaceCoursesNodeJS;

  usePageContext(link, LINKS_AUTH_USER.geniusSpaceCourses);

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Avatar
          src={NodeJSLogo}
          sx={{ width: 320, height: 90 }}
          variant='rounded'
        />
      </Box>
    </Box>
  );
};

export default GeniusSpaceCoursesNodeJSPage;
