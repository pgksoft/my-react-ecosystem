import React, { FC, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Box, TextField } from '@mui/material';
import { useStylesDialog } from '../../../infrastructure/ui/style/style-dialog';
import { ViewWrap } from '../../../infrastructure/ui/view-wrap/view-wrap';
import ComputesFrequencyEachLetterInText from '../util/computes-frequency-each-letter-in-text';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../const/titles';
import { ComputesFrequencyEachLetterInTextContext } from '../../../../context/computes-frequency-each-letter-in-text-context/computes-frequency-each-letter-in-text-context';
import BarCharWrapper from '../ui/bar-chart-wrapper';
import ToolPanelForBarChart from '../tool-panel-for-bar-chart/model/tool-panel-for-bar-chart';

const ComputesFrequencyEachLetterInTextDetail: FC = () => {
  const classes = useStylesDialog();

  const { setDataCharts } = useContext(
    ComputesFrequencyEachLetterInTextContext
  );

  const [text, setText] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setDataCharts(ComputesFrequencyEachLetterInText(text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

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
            onChange={onChangeText}
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
