import { useMemo } from 'react';
import type TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useEntitySearchParamsInLocalStorage from '../entity-search-params-in-local-storage.hook';

type TReturnProps = { isResolveEntitySearchParams: boolean };

const useResolveEntitySearchParams = (
  entityNameKey: TEntityNameKeys
): TReturnProps => {
  //   const [isResolve, setIsResolve] = useState<boolean>(false);

  //   const { pathname, query } = useGetPathAndQuery();

  const { getSearchParams } =
    useEntitySearchParamsInLocalStorage(entityNameKey);

  const searchParams = useMemo(() => {
    return getSearchParams();
  }, [getSearchParams]);

  const isResolveEntitySearchParams = useMemo(() => {
    if (Object.keys(searchParams).length === 0) return true;
    return false;
  }, [searchParams]);

  //   useEffect(() => {
  //     if (isResolve) return;
  //     if (Object.keys(searchParams).length === 0) setIsResolve(true);
  //   }, [isResolve, searchParams]);

  return { isResolveEntitySearchParams };
};

export default useResolveEntitySearchParams;
