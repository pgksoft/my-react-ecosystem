import React, { FC, useContext } from 'react';
import { Box, TablePagination, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { ComputesFrequencyEachLetterInTextContext } from '../../context/computes-frequency-each-letter-in-text-context';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../../const/titles';
import { ModalCommandButtonWrapper } from '../../../../../app-infrastructure/modal-commands/model/modal-command-button-wrapper';
import {
  SettingControlParametersCommandWrapper,
  ViewTableOfDataCommandWrapper
} from '../../helpers/wrappers';

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    tools: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
      '& > div': {
        paddingLeft: '8px',
        paddingRight: '8px'
      }
    }
  });
});

const ToolPanelForBarChart: FC = () => {
  const classes = useStyle();
  const {
    dataCharts,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = useContext(ComputesFrequencyEachLetterInTextContext);

  if (!dataCharts) return null;

  return (
    <Box className={classes.tools}>
      <Box>
        <ModalCommandButtonWrapper
          kind='icon-button'
          baseButtonProps={{
            title:
              TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.viewTableOfData,
            icon: <TableChartIcon />
          }}
          NestedComponent={ViewTableOfDataCommandWrapper}
          maxWidth='xs'
        />
      </Box>
      <Box>
        <ModalCommandButtonWrapper
          kind='icon-button'
          baseButtonProps={{
            title:
              TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.settingControlParameters,
            icon: <SettingsIcon />
          }}
          NestedComponent={SettingControlParametersCommandWrapper}
          maxWidth='xs'
        />
      </Box>
      <Box>
        <Typography>
          {`${TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.numberOfCharacters}: ${dataCharts.length}`}
        </Typography>
      </Box>
      <Box>
        <TablePagination
          labelRowsPerPage={
            TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.labelPaginationChart
          }
          rowsPerPageOptions={[10, 15, 20, 25, 30, 40, 50, 75, 100]}
          component='div'
          count={dataCharts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default ToolPanelForBarChart;
