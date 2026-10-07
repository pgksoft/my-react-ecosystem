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
        <Paper sx={{ padding: 0.7, width: '100%', height: '100%' }}>
          <TableContainer
            sx={{
              overflow: 'auto',
              maxHeight: '80vh'
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
            sx={{ h: '5%', border: '1px solid blue' }}
          >
            '*************'
          </Box>
        </Paper>
      )}
    </>
  );
};

export default BuildEntityTable;
