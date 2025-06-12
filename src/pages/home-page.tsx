import React, { FC } from 'react';
import clsx from 'clsx';
import { Box, Typography, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import logoPgkSoft from '../_images/author-cv.jpg';
import logoReact from '../_images/logoReact.svg';
import { LINKS_AUTH_USER } from '../_route/links';
import { useActivePageLinks } from './hooks/active-page-links.hook';
import { TITLES_OF_APP } from '../_const/titles-of-app';
import { COLORS } from '../_const/colors';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '16px',
      height: '80vh',
      wordBreak: 'break-word'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
    },
    company: {
      width: '21%',
      alignSelf: 'flex-start'
    },
    app: {
      width: '56%'
    },
    logoBox: {
      alignSelf: 'center',
      height: '3vmax',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      boxSizing: 'border-box',
      border: `1px solid ${COLORS.lightGray}`,
      borderRadius: '999px'
    },
    logoPgkSoft: {
      width: '3vmax',
      backgroundImage: `url(${logoPgkSoft})`
    },
    logoReact: {
      width: '3vmax',
      backgroundImage: `url(${logoReact})`
    }
  });
});

export const HomePage: FC = () => {
  const classes = useStyles();

  const link = LINKS_AUTH_USER.home;

  useActivePageLinks(link, LINKS_AUTH_USER.home);

  return (
    <Box className={classes.root}>
      <Box className={clsx(classes.section, classes.company)}>
        <Box className={clsx(classes.logoBox, classes.logoReact)}>&nbsp;</Box>
        <Typography variant='h6'>React</Typography>
      </Box>

      <Box className={clsx(classes.section, classes.app)}>
        <Typography
          color='primary'
          fontSize='3rem'
          fontWeight='bolt'
          letterSpacing='5px'
          sx={{
            textShadow:
              '-1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow, 2px 2px 5px blue'
          }}
        >
          {TITLES_OF_APP.title}
        </Typography>
        <Typography
          color='gray'
          fontSize='1.5rem'
          fontWeight='bolt'
          letterSpacing='2px'
        >
          Trial ground by REACT and its ecosystem
        </Typography>
      </Box>

      <Box className={clsx(classes.section, classes.company)}>
        <Box className={clsx(classes.logoBox, classes.logoPgkSoft)}>&nbsp;</Box>
        <Typography variant='h6'>PgkSoft</Typography>
      </Box>
    </Box>
  );
};
