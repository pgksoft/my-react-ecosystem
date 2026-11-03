import { useCallback, useEffect, useMemo, useState } from 'react';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import apiEntityUrl from '../../api-platform/app-entities/const/api-entity-url';
import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import resolveBaseUrl from '../../api-platform/app-entities/resolve-base-url';
import type TypeGuard from '../../app-types/type-guard';
import createArrayGuardOfTypePredicate from '../../app-helpers/create-array-guard-of-type-predicate';
import useFetch from '../../api-platform/http-hook/use-fetch';
import type { TPageResponse } from '../../api-platform/api-response/t-page-response';

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
      return createArrayGuardOfTypePredicate(isEntityGuard);
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

  const { data: entityResponse, error, update } = useFetch<TPageResponse<T>>();

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
    if (!error && entityResponse && isEntityArray(entityResponse.items)) {
      sessionStorage.setItem(
        entityNameKey,
        JSON.stringify(entityResponse.items)
      );
      setData(entityResponse.items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityResponse, error]);

  return data;
};

export default useCachingDataInSessionStorage;
