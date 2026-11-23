import { useEffect, useRef, type FC } from 'react';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../store/use-app-dispatch';
import useEntitySearchParamsInLocalStorage, {
  type TEntityPlacement
} from '../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import { setMutationEntity } from '../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import type { TGetParameter } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import useGetPathAndQuery from '../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import deepEqual from '../../../app-helpers/deep-equal';

type TEntityListSortAllOffWrapperProps = {
  entityNameKeySortAllOff: TEntityNameKeys;
  returnUrl: string;
  newQuery: Record<string, TGetParameter>;
  entityPlacement?: TEntityPlacement;
};

const EntityListSortAllOffWrapper: FC<TEntityListSortAllOffWrapperProps> = (
  props
) => {
  const {
    entityNameKeySortAllOff,
    returnUrl,
    newQuery,
    entityPlacement = 'page'
  } = props;
  const isRun = useRef(false);

  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { removeAllSearchParams: removeSortParams } =
    useEntitySearchParamsInLocalStorage({
      entityNameKey: entityNameKeySortAllOff,
      kindGetParams: 'sort',
      entityPlacement
    });

  const { query } = useGetPathAndQuery();

  useEffect(() => {
    if (!isRun.current) {
      removeSortParams();
      navigate(returnUrl);
      isRun.current = true;
    }
  }, [navigate, removeSortParams, returnUrl]);

  useEffect(() => {
    if (isRun.current) {
      const isReady = deepEqual(query, newQuery);
      if (isReady) {
        isRun.current = false;
        appDispatch(setMutationEntity([entityNameKeySortAllOff, 'yes']));
        checkReturnParameters.Pop();
      }
    }
  }, [appDispatch, entityNameKeySortAllOff, newQuery, query]);

  return null;
};

export default EntityListSortAllOffWrapper;
