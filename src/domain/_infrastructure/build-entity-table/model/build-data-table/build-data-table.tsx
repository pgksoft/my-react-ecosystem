/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Table, TableBody } from '@mui/material';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import {
  clearSelectedEntityItems,
  setSelectedEntityItems
} from '../../../../../redux-toolkit/selected-entity-items/selected-entity-items-slice';
import { TTableSchema } from '../../table-types/t-table-schema';
import { TDataTable } from '../../table-types/t-data-table';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import BuildTableHead from '../build-table-head/build-table-head';
import BuildTableRow from '../build-table-row/build-table-row';

type TBuildDataTable<T> = {
  entityNameKey: TEntityNameKeys;
  tableSchema: TTableSchema;
  dataTable: TDataTable;
  entityData: T[];
  returnPopup?: string;
};

function BuildDataTable<T extends IEntityMember>({
  entityNameKey,
  tableSchema,
  dataTable,
  entityData,
  returnPopup
}: TBuildDataTable<T>) {
  const [selected, setSelected] = useState<readonly string[]>([]);

  const appDispatch = useAppDispatch();

  const sortDataKey: string[] = [];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = dataTable.map((row) => {
        return row.id.toString();
      });
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  useEffect(() => {
    if (!selected.length) {
      appDispatch(clearSelectedEntityItems(entityNameKey));
    } else {
      const selectedEntityItems = entityData.filter((item) => {
        return selected.includes(item.id.toString());
      });
      appDispatch(setSelectedEntityItems([entityNameKey, selectedEntityItems]));
    }
  }, [appDispatch, entityData, entityNameKey, selected, selected.length]);

  return (
    <Table aria-label='sticky table' stickyHeader size='small'>
      <BuildTableHead
        entityNameKey={entityNameKey}
        tableSchema={tableSchema}
        sortDataKey={sortDataKey}
        numSelected={selected.length}
        rowCount={dataTable.length}
        onSelectAllClick={handleSelectAllClick}
      />
      {!!dataTable.length && (
        <TableBody>
          {[...dataTable].map((dataRecord) => {
            const idRecord = dataRecord.id.toString();
            return (
              <BuildTableRow
                key={idRecord}
                entityNameKey={entityNameKey}
                dataRecord={dataRecord}
                sortDataKey={sortDataKey}
                tableSchema={tableSchema}
                onClick={handleClick}
                isItemSelected={selected.includes(idRecord)}
                returnPopup={returnPopup}
              />
            );
          })}
        </TableBody>
      )}
    </Table>
  );
}

export default BuildDataTable;
