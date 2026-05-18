import { useCallback, useEffect, useMemo, useState } from 'react';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import apiEntityUrl from '../../api-platform/app-entities/const/api-entity-url';
import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import resolveBaseUrl from '../../api-platform/app-entities/resolve-base-url';
import type TypeGuard from '../../app-types/type-guard';
import isArrayOfTypePredicate from '../../app-helpers/is-array-of-type-predicate';
import useFetch from '../../api-platform/http-hook/use-fetch';

type TProps<T> = {
  entityNameKey: TEntityNameKeys;
  isEntityGuard: TypeGuard<T>;
};

type TData<T> = T[] | null;

const useCachingDataInSessionStorage = <T extends IEntityMember>({
  entityNameKey,
  isEntityGuard
}: TProps<T>): TData<T> => {
  const isEntityArray = useCallback(
    (entity: T[]) => {
      return isArrayOfTypePredicate(isEntityGuard);
    },
    [isEntityGuard]
  );

  const [data, setData] = useState<T[] | null>(() => {
    try {
      const raw = sessionStorage.getItem(entityNameKey as string);
      if (raw) {
        const entity = JSON.parse(raw);
        if (isEntityArray(entity)) return entity;
      }
      return null;
    } catch {
      return null;
    }
  });

  const { data: entity, error, update } = useFetch<T[]>();

  const baseURL = useMemo(() => {
    return resolveBaseUrl(entityNameKey);
  }, [entityNameKey]);
  const url = useMemo(() => {
    return apiEntityUrl[entityNameKey];
  }, [entityNameKey]);

  useEffect(() => {
    if (!data) {
      update({ url, baseURL });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!error && entity && isEntityArray(entity)) {
      sessionStorage.setItem(entityNameKey, JSON.stringify(entity));
      setData(entity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, error]);

  return data;
};

export default useCachingDataInSessionStorage;
