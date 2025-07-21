/* eslint-disable react/require-default-props */
import React, { FC, useEffect, useState } from 'react';
import { Paper, TableContainer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TTableSchema } from '../table-types/t-table-schema';
import { TDataTable } from '../table-types/t-data-table';
import TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppSelector from '../../../../store/use-app-selector';
import { mutationEntitySelector } from '../../../../redux-toolkit/mutation-entities/mutation-entities-selectors';
import transformDataBySchema from '../helpers/transform-data-by-schema';
import LoadingDataComponent from '../../loading-data-component/loading-data-component';
import isEntityMemberArray from '../helpers/is-entity-member-array';
import BuildDataTable from './build-data-table/build-data-table';
import { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  container: {
    overflow: 'auto'
  }
});

type TBuildTable = {
  entityNameKey: TEntityNameKeys;
  tableSchema: TTableSchema;
  returnPopup?: string;
};

const BuildEntityTable: FC<TBuildTable> = (props) => {
  const { entityNameKey, tableSchema, returnPopup } = props;

  const classes = useStyles();

  const [entityData, setEntityData] = useState<IEntityMember[] | null>(null);
  const [tableData, setTableData] = useState<TDataTable>([]);

  const mutation = useAppSelector(mutationEntitySelector)[entityNameKey];

  const containerHeight = '80vh'; // later to account for the display of the validation panel

  const onEntityDataLoaded = (data: IEntityMember[] | null) => {
    setEntityData(data);
  };

  useEffect(() => {
    if (entityData) {
      setTableData(transformDataBySchema(tableSchema, entityData));
    }
  }, [entityData, tableSchema]);

  return (
    <>
      <LoadingDataComponent
        inData={entityData}
        entityNameKey={entityNameKey}
        mutation={mutation}
        onLoaded={onEntityDataLoaded}
        isShowDataEmptyWarning
      />
      <Paper className={classes.root}>
        <TableContainer sx={{ height: containerHeight }}>
          {isEntityMemberArray(entityData) && (
            <BuildDataTable
              entityNameKey={entityNameKey}
              tableSchema={tableSchema}
              dataTable={tableData}
              entityData={entityData}
              returnPopup={returnPopup}
            />
          )}
        </TableContainer>
        {/* Here must be pagination */}
      </Paper>
    </>
  );
};

export default BuildEntityTable;
