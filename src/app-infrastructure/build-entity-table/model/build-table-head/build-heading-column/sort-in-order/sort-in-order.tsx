import React, { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSortLabel, { TDirection } from './custom-sort-label';
import type TEntityNameKeys from '../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useEntitySearchParamsInLocalStorage from '../../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import useAppDispatch from '../../../../../../store/use-app-dispatch';
import useGetPathAndQuery from '../../../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import buildQueryString from '../../../../../../_hooks/get-parameter.hooks/helpers/build-query-string';
import { omitKeys } from '../../../../../app-helpers/omit-keys';
import { setMutationEntity } from '../../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import { SORT_MARKER } from '../../../../const/title';

type TSortInOrderProps = {
  entityNameKey: TEntityNameKeys;
  dataKey: string;
};

export const SortInOrder: React.FC<TSortInOrderProps> = ({
  entityNameKey,
  dataKey
}) => {
  const isHandle = useRef<boolean>(false);

  const sortDataKey = useMemo(() => {
    return `${SORT_MARKER}[${dataKey}]`;
  }, [dataKey]);

  const { getSearchParam, setSearchParam, removeSearchParam } =
    useEntitySearchParamsInLocalStorage(entityNameKey, sortDataKey, 'sort');

  const initValue = useRef<TDirection>(getSearchParam());

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pathname, query } = useGetPathAndQuery();

  const resolveRequestSort = (direction: TDirection) => {
    if (!direction) {
      removeSearchParam();
      const getParameters = omitKeys(query, [sortDataKey]);
      const url = buildQueryString(pathname, getParameters);
      navigate(url);
    } else {
      const getParameters = {
        ...query,
        [`${sortDataKey}`]: direction
      };
      setSearchParam(direction);
      const url = buildQueryString(pathname, getParameters);
      navigate(url);
    }
  };

  const handleRequestSort = () => {
    switch (initValue.current) {
      case 'asc':
        resolveRequestSort('desc');
        break;
      case 'desc':
        resolveRequestSort(null);
        break;
      case null:
        resolveRequestSort('asc');
        break;
      default:
        break;
    }
    isHandle.current = true;
  };

  useEffect(() => {
    if (!isHandle.current) return;

    const newDirection = query[sortDataKey];
    if (
      (!newDirection && !!initValue.current) ||
      (!initValue.current && !!newDirection) ||
      (!!initValue.current &&
        !!newDirection &&
        newDirection !== initValue.current)
    ) {
      isHandle.current = false;
      appDispatch(setMutationEntity([entityNameKey, 'yes']));
    }
  }, [appDispatch, entityNameKey, query, sortDataKey]);

  return (
    <CustomSortLabel
      direction={initValue.current}
      onClick={handleRequestSort}
    />
  );
};
