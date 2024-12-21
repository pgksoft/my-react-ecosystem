import React, { FC, useContext } from 'react';
import {
  Box,
  MenuItem,
  Select,
  TablePagination,
  Theme,
  Typography
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import TableChartIcon from '@mui/icons-material/TableChart';
import { ComputesFrequencyEachLetterInTextContext } from '../../context/computes-frequency-each-letter-in-text-context';
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

const precisions = [2, 3, 4, 5, 6, 7];

const ToolPanelForBarChart: FC = () => {
  const classes = useStyle();
  const {
    precision,
    dataCharts,
    page,
    rowsPerPage,
    handleChangePrecision,
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
        <Typography>
          {`${TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.numberOfCharacters}: ${dataCharts.length}`}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ paddingRight: 0.5 }}>
          {`${TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.precision}:`}
        </Typography>
        <Select
          value={`${precision}`}
          onChange={handleChangePrecision}
          variant='standard'
        >
          {precisions.map((value) => {
            return (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
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
