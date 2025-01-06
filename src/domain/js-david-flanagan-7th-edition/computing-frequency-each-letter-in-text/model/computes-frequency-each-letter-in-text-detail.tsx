import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import { Box, TextField } from '@mui/material';
import { useStylesDialog } from '../../../infrastructure/ui/style/style-dialog';
import { ViewWrap } from '../../../infrastructure/ui/view-wrap/view-wrap';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../const/titles';
import { ComputesFrequencyEachLetterInTextContext } from '../context/computes-frequency-each-letter-in-text-context';
import BarCharWrapper from '../ui/bar-chart-wrapper';
import ToolPanelForBarChart from '../ui/tool-panel-for-bar-chart';

const ComputesFrequencyEachLetterInTextDetail: FC = () => {
  const classes = useStylesDialog();

  const { text, handleChangeText } = useContext(
    ComputesFrequencyEachLetterInTextContext
  );

  return (
    <Box className={classes.rootList} sx={{ paddingTop: 2 }}>
      <Box className={clsx(classes.rootPopupDialog, classes.margin0)}>
        <Box
          className={classes.boxContainer}
          sx={{ height: '100%', paddingTop: 1.35 }}
        >
          <TextField
            multiline
            rows={28}
            value={text}
            label={
              TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.textSectionTitle
            }
            onChange={handleChangeText}
          />
        </Box>
        <Box className={classes.boxContainer}>
          <ViewWrap
            style={{ height: '100%', overflow: 'auto' }}
            legend={
              TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.chartSectionTitle
            }
          >
            <ToolPanelForBarChart />
            <BarCharWrapper />
          </ViewWrap>
        </Box>
      </Box>
    </Box>
  );
};

export default ComputesFrequencyEachLetterInTextDetail;
