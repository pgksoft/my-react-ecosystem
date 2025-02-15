import React, { FC, useContext } from 'react';
import { Box, TablePagination, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { ComputesFrequencyEachLetterInTextContext } from '../context/computes-frequency-each-letter-in-text-context';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../const/titles';
import { ModalWithIconButton } from '../../../_infrastructure/ui/modal-with-button/modal-with-icon-button';
import { WrapperOfNestedModalDialog } from '../../../_infrastructure/ui/wrapper-of-nested-modal-dialog/wrapper-of-nested-modal-dialog';
import ViewTableOfData from './view-table-of-data';
import SettingControlParameters from './setting-control-parameters';

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    tools: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
      '& > div': {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
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
        <ModalWithIconButton
          icon={<TableChartIcon />}
          iconColor='primary'
          title={TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.viewTableOfData}
          NestedForm={WrapperOfNestedModalDialog}
          childrenNestedForm={<ViewTableOfData />}
          maxWidth='xs'
        />
      </Box>
      <Box>
        <ModalWithIconButton
          icon={<SettingsIcon />}
          iconColor='primary'
          title={
            TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.settingControlParameters
          }
          NestedForm={WrapperOfNestedModalDialog}
          childrenNestedForm={<SettingControlParameters />}
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
