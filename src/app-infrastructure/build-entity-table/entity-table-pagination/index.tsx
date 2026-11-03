import React, { type FC } from 'react';
import Pagination from '@mui/material/Pagination';
import type { TEntityView } from '../../api-platform/api-response/t-page-response';
import useAppDispatch from '../../../store/use-app-dispatch';
import { setEntityDataPage } from '../../../redux-toolkit/entity-data-page/entity-data-page-slice';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { setMutationEntity } from '../../../redux-toolkit/mutation-entities/mutation-entities-slice';

type TEntityTablePaginationProps = {
  entityNameKey: TEntityNameKeys;
  entityView: TEntityView;
};

const EntityTablePagination: FC<TEntityTablePaginationProps> = ({
  entityNameKey,
  entityView
}) => {
  const { page, last } = entityView;

  const appDispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (value !== page) {
      appDispatch(setEntityDataPage([entityNameKey, value]));
      appDispatch(setMutationEntity([entityNameKey, 'yes']));
    }
  };

  return (
    <Pagination
      page={page}
      count={last}
      variant='outlined'
      shape='rounded'
      color='primary'
      onChange={handleChange}
    />
  );
};

export default EntityTablePagination;
