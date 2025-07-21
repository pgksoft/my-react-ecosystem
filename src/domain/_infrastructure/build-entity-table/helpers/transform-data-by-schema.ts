import { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import { TDataRecord, TDataTable } from '../table-types/t-data-table';
import { TTableSchema } from '../table-types/t-table-schema';
import findValuesInObject from './find-values-in-object';

const transformDataBySchema = (
  tableSchema: TTableSchema = [],
  entityData: IEntityMember[] = []
): TDataTable => {
  const transformedDataTable: TDataTable = [];
  entityData.forEach((data) => {
    const dataRecord: TDataRecord = {};
    tableSchema.forEach(({ dataKey, getContent }) => {
      const keys = dataKey.split('.');
      dataRecord[dataKey] = [
        ...findValuesInObject(keys, data, data, getContent)
      ];
    });
    transformedDataTable.push(dataRecord);
  });
  return transformedDataTable;
};

export default transformDataBySchema;
