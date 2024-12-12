import React, { FC } from 'react';
import { Box, Typography, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { LINKS_AUTH_USER } from '../../_route/links';
import { usePageContext } from '../hooks/page-context.hook';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../../domain/js-david-flanagan-7th-edition/computing-frequency-each-letter-in-text/const/titles';

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
      padding: '16px 0px'
    }
  });
});

export const ComputesFrequencyEachLetterInTextPage: FC = () => {
  const classes = useStyles();

  usePageContext(
    LINKS_AUTH_USER.computesFrequencyEachLetterInText,
    LINKS_AUTH_USER.jsDavidFlanagan7thEdition
  );

  return (
    <Box className={classes.root}>
      {TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.title}
    </Box>
  );
};
