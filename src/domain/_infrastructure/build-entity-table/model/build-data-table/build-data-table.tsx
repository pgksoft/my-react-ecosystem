/* eslint-disable react/require-default-props */
import React from 'react';
import {
  PopoverOrigin,
  Table,
  TableCell,
  TableRow,
  Theme
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { TTableSchema } from '../../table-types/t-table-schema';
import { TDataTable } from '../../table-types/t-data-table';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import BuildHeadingColumn from '../build-heading-column/build-heading-column';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    tableRightBorder: {
      borderWidth: 1,
      borderColor: '#cecece',
      borderStyle: 'solid',
      padding: 0,
      paddingLeft: '8px',
      paddingRight: '8px'
    }
  });
});

interface TBuildDataTable<T> {
  entityNameKey: TEntityNameKeys;
  tableSchema: TTableSchema;
  tableData: TDataTable;
  entityData: T[];
  returnPopup?: string;
}

function BuildDataTable<T extends IEntityMember>({
  entityNameKey,
  tableSchema,
  tableData,
  entityData,
  returnPopup
}: TBuildDataTable<T>) {
  const classes = useStyles();
  const sortDataKey: string[] = [];

  const getHorizontal = (i: number): PopoverOrigin['horizontal'] => {
    if (i === 0) return 'left';
    if (i === tableSchema.length - 1) return 'right';
    return 'center';
  };

  return (
    <Table aria-label='sticky table'>
      <TableRow>
        {tableSchema.map((columnSchema, i) => {
          if (!columnSchema.title) return null;
          sortDataKey.push(columnSchema.dataKey);
          return (
            <TableCell
              key={columnSchema.key}
              align='left'
              className={classes.tableRightBorder}
            >
              <BuildHeadingColumn
                key={columnSchema.key}
                columnSchema={columnSchema}
                horizontal={getHorizontal(i)}
              />
            </TableCell>
          );
        })}
      </TableRow>
    </Table>
  );
}

export default BuildDataTable;
