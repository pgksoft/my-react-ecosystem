import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../_route/links';
import { useActivePageLinks } from '../hooks/active-page-links.hook';
import { useStylesDialog } from '../../domain/_infrastructure/ui/style/style-dialog';
import { ComputesFrequencyEachLetterInTextDetail } from '../../domain/js-david-flanagan-7th-edition';
import { ComputesFrequencyEachLetterInTextContextProvider } from '../../domain/js-david-flanagan-7th-edition/computing-frequency-each-letter-in-text/context/computes-frequency-each-letter-in-text-context-provider';

export const ComputesFrequencyEachLetterInTextPage: FC = () => {
  const classes = useStylesDialog();

  useActivePageLinks(
    LINKS_AUTH_USER.computesFrequencyEachLetterInText,
    LINKS_AUTH_USER.jsDavidFlanagan7thEdition
  );

  return (
    <Box className={classes.rootList}>
      <ComputesFrequencyEachLetterInTextContextProvider>
        <ComputesFrequencyEachLetterInTextDetail />
      </ComputesFrequencyEachLetterInTextContextProvider>
    </Box>
  );
};
