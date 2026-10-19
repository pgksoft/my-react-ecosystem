/* eslint-disable react/require-default-props */
import React, { FC, useState } from 'react';
import { Box, Paper, TableContainer } from '@mui/material';
import { TTableSchema } from '../table-types/t-table-schema';
import TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import LoadingDataComponent from '../loading-data-component/loading-data-component';
import BuildDataTable from './build-data-table/build-data-table';
import {
  IEntityMember,
  isEntityMemberArray
} from '../../api-platform/app-entities/entity-member/entity-member';

type TBuildTable = {
  entityNameKey: TEntityNameKeys;
  tableSchema: TTableSchema<string>;
};

const BuildEntityTable: FC<TBuildTable> = (props) => {
  const { entityNameKey, tableSchema } = props;

  const [entityData, setEntityData] = useState<IEntityMember[] | null>(null);

  const onEntityDataLoaded = (data: IEntityMember[] | null) => {
    setEntityData(data);
  };

  return (
    <>
      <LoadingDataComponent
        inData={entityData}
        entityNameKey={entityNameKey}
        onLoaded={onEntityDataLoaded}
        isShowDataEmptyWarning
      />
      {!!entityData && (
        <Paper
          aria-description='paper-table-wrapper '
          sx={{
            padding: 0.7,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            minWidth: 0,
            minHeight: 0,
            boxSizing: 'border-box'
          }}
        >
          <TableContainer
            aria-description='table-container-entity'
            sx={{
              flex: '1 1 auto',
              overflow: 'auto',
              maxHeight: '100%',
              minWidth: 0,
              minHeight: 0
            }}
          >
            {isEntityMemberArray(entityData) && (
              <BuildDataTable
                entityNameKey={entityNameKey}
                tableSchema={tableSchema}
                entityData={entityData}
              />
            )}
          </TableContainer>
          {/* Here must be pagination */}
          <Box
            aria-description='table-pagination'
            sx={{
              height: 48,
              flex: '0 0 auto',
              border: '1px solid blue'
            }}
          >
            '*************'
          </Box>
        </Paper>
      )}
    </>
  );
};

export default BuildEntityTable;
