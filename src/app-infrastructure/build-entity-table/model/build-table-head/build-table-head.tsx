/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC } from 'react';
import {
  Checkbox,
  PopoverOrigin,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { TTableSchema } from '../../table-types/t-table-schema';
import BuildHeadingColumn from './build-heading-column/build-heading-column';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';

type TBuildTableHeadProps = {
  entityNameKey: TEntityNameKeys;
  tableSchema: TTableSchema;
  sortDataKey: string[];
  numSelected: number;
  rowCount: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BuildTableHead: FC<TBuildTableHeadProps> = ({
  entityNameKey,
  tableSchema,
  sortDataKey,
  numSelected,
  rowCount,
  onSelectAllClick
}) => {
  const getHorizontal = (i: number): PopoverOrigin['horizontal'] => {
    if (i === 0) return 'left';
    if (i === tableSchema.length - 1) return 'right';
    return 'center';
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: {
                'aria-label': 'select all desserts'
              }
            }}
          />
        </TableCell>
        {tableSchema.map((columnSchema, i) => {
          if (!columnSchema.title) return null;
          !sortDataKey.includes(columnSchema.dataKey) &&
            sortDataKey.push(columnSchema.dataKey);
          return (
            <TableCell
              key={columnSchema.key}
              align='left'
              sx={{
                p: '0 4px',
                borderWidth: 1,
                borderColor: '#cecece',
                borderStyle: 'solid'
              }}
            >
              <BuildHeadingColumn
                entityNameKey={entityNameKey}
                key={columnSchema.key}
                columnSchema={columnSchema}
                horizontal={getHorizontal(i)}
              />
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default BuildTableHead;
