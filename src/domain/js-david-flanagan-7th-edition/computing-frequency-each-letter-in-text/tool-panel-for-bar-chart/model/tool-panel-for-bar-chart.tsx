import React, { FC, useContext } from 'react';
import { Box, TablePagination, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import TableChartIcon from '@mui/icons-material/TableChart';
import { ComputesFrequencyEachLetterInTextContext } from '../../../../../context/computes-frequency-each-letter-in-text-context/computes-frequency-each-letter-in-text-context';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../../const/titles';
import { ModalWithIconButton } from '../../../../infrastructure/ui/modal-with-button/modal-with-icon-button';
import { WrapperOfNestedModalDialog } from '../../../../infrastructure/ui/modal-with-button/wrapper-of-nested-modal-dialog';
import ViewTableOfData from '../ui/view-table-of-data';

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
        <Typography>
          {`${TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.numberOfCharacters}: ${dataCharts.length}`}
        </Typography>
      </Box>
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
        <TablePagination
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
