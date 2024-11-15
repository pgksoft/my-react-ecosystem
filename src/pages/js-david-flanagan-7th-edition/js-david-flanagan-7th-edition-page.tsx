import React, { FC } from 'react';
import { Box, Typography, Theme, Avatar } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { usePageContext } from '../hooks/page-context.hook';
import { TITLES_JS_DAVID_FLANAGAN_7TH_EDITION } from '../../domain/js-david-flanagan-7th-edition/const/titles';
import SrcIcon from '../../_images/rhinoceros-sondaicus.webp';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      width: '100%',
      padding: '16px',
      height: '80vh',
      wordBreak: 'break-word',
      flexDirection: 'column'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px'
    }
  });
});

export const JsDavidFlanagan7thEditionPage: FC = () => {
  const classes = useStyles();

  const link = LINKS_AUTH_USER.jsDavidFlanagan7thEdition;

  usePageContext(link, LINKS_AUTH_USER.jsDavidFlanagan7thEdition);

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Avatar
          variant='rounded'
          src={SrcIcon}
          sx={{ height: 186, width: 186, alignSelf: 'center', opacity: 0.8 }}
        />
      </Box>
      <Box className={classes.section}>
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
          {TITLES_JS_DAVID_FLANAGAN_7TH_EDITION.title}
        </Typography>
        <Typography
          color='gray'
          fontSize='2rem'
          fontWeight='bolt'
          letterSpacing='2px'
        >
          playing with code examples
        </Typography>
      </Box>
    </Box>
  );
};
