/* eslint-disable react/require-default-props */
import React from 'react';
import { Box, Checkbox, TableCell, TableRow } from '@mui/material';
import { TDataRecord } from '../../table-types/t-data-table';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import getRandomUuid from '../../../helpers/get-random-uuid';
import renderDataValue from './helpers/render-data-value';
import { TTableSchema } from '../../table-types/t-table-schema';

type TBuildTableRow = {
  entityNameKey: TEntityNameKeys;
  dataRecord: TDataRecord;
  sortDataKey: string[];
  tableSchema: TTableSchema;
  onClick: (event: React.MouseEvent<unknown>, id: string) => void;
  isItemSelected: boolean;
  returnPopup?: string;
};

function BuildTableRow({
  entityNameKey,
  dataRecord,
  sortDataKey,
  tableSchema,
  onClick,
  isItemSelected,
  returnPopup
}: TBuildTableRow) {
  const uniqueKey = dataRecord.id.toString();

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
      <TableCell padding='checkbox'>
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
            sx={{
              verticalAlign: 'top',
              borderWidth: 1,
              borderColor: '#cecece',
              borderStyle: 'solid',
              p: 0,
              ...columnSchema?.sx
            }}
            align='left'
            key={key}
          >
            <Box
              sx={{
                display: 'flex',
                wordBreak: 'break-word',
                alignItems: 'center',
                width: '100%',
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
