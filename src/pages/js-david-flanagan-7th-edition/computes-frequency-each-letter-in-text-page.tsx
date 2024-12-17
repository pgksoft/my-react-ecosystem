import React, { FC } from 'react';
import { Box } from '@mui/material';
import { LINKS_AUTH_USER } from '../../_route/links';
import { usePageContext } from '../hooks/page-context.hook';
import { useStylesDialog } from '../../domain/infrastructure/ui/style/style-dialog';
import { ComputesFrequencyEachLetterInTextDetail } from '../../domain/js-david-flanagan-7th-edition';
import { ComputesFrequencyEachLetterInTextContextProvider } from '../../context-provider/computes-frequency-each-letter-in-text-context-provider';

export const ComputesFrequencyEachLetterInTextPage: FC = () => {
  const classes = useStylesDialog();

  usePageContext(
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
