/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import { Box, Checkbox, TableCell, TableRow } from '@mui/material';
import { TDataRecord } from '../../table-types/t-data-table';
import getRandomUuid from '../../../app-helpers/get-random-uuid';
import renderDataValue from './helpers/render-data-value';
import { TTableSchema } from '../../table-types/t-table-schema';

type TBuildTableRow = {
  dataRecord: TDataRecord;
  sortDataKey: string[];
  tableSchema: TTableSchema<unknown>;
  onClick: (event: React.MouseEvent<unknown>, id: string) => void;
  isItemSelected: boolean;
};

function BuildTableRow({
  dataRecord,
  sortDataKey,
  tableSchema,
  onClick,
  isItemSelected
}: TBuildTableRow) {
  const uniqueKey = useMemo(() => {
    return dataRecord.id.toString();
  }, [dataRecord.id]);

  return (
    <TableRow
      key={`${uniqueKey}TableRow`}
      hover
      onClick={(event) => {
        onClick(event, uniqueKey);
      }}
      role='checkbox'
      tabIndex={-1}
      aria-checked={isItemSelected}
      selected={isItemSelected}
      sx={{ cursor: 'pointer' }}
    >
      <TableCell
        padding='checkbox'
        sx={{ borderWidth: 1, borderColor: '#cecece', borderStyle: 'solid' }}
      >
        <Checkbox
          color='primary'
          checked={isItemSelected}
          slotProps={{
            input: {
              'aria-labelledby': `enhanced-table-checkbox-${uniqueKey}`
            }
          }}
        />
      </TableCell>
      {sortDataKey.map((dataKey) => {
        const key = `${uniqueKey}~${dataKey}~${getRandomUuid()}`;
        const columnSchema = tableSchema.find((columnSchema) => {
          return columnSchema.dataKey === dataKey;
        });
        return (
          <TableCell
            align='left'
            sx={{
              verticalAlign: 'top',
              borderWidth: 1,
              borderColor: '#cecece',
              borderStyle: 'solid',
              p: 0,
              ...columnSchema?.sx
            }}
            key={key}
          >
            <Box
              sx={{
                display: 'flex',
                wordBreak: 'break-word',
                alignItems: 'center',
                alignSelf: 'center',
                padding: 0
              }}
            >
              {renderDataValue(dataRecord[dataKey])}
            </Box>
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default BuildTableRow;
