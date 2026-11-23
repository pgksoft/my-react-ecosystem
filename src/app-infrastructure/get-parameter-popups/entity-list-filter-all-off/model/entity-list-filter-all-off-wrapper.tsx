import { useEffect, useRef, type FC } from 'react';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import useEntitySearchParamsInLocalStorage, {
  type TEntityPlacement
} from '../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';
import isDataLoadModePage from '../../../entity-metadata/is-data-load-mode-page';
import { setEntityDataPage } from '../../../../redux-toolkit/entity-data-page/entity-data-page-slice';
import useGetPathAndQuery from '../../../../_hooks/get-parameter.hooks/get-path-and-query.hook';
import deepEqual from '../../../app-helpers/deep-equal';
import type { TGetParameter } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';

type TEntityListFilterAllOffWrapperProps = {
  entityNameKeyFilterAllOff: TEntityNameKeys;
  returnUrl: string;
  newQuery: Record<string, TGetParameter>;
  entityPlacement?: TEntityPlacement;
};

const EntityListFilterAllOffWrapper: FC<TEntityListFilterAllOffWrapperProps> = (
  props
) => {
  const {
    entityNameKeyFilterAllOff,
    returnUrl,
    newQuery,
    entityPlacement = 'page'
  } = props;
  const isRun = useRef(false);

  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { removeAllSearchParams: removeSearchParams } =
    useEntitySearchParamsInLocalStorage({
      entityNameKey: entityNameKeyFilterAllOff,
      entityPlacement
    });

  const { query } = useGetPathAndQuery();

  useEffect(() => {
    if (!isRun.current) {
      removeSearchParams();
      navigate(returnUrl);
      isRun.current = true;
    }
  }, [navigate, removeSearchParams, returnUrl]);

  useEffect(() => {
    if (isRun.current) {
      const isReady = deepEqual(query, newQuery);
      if (isReady) {
        isRun.current = false;
        if (isDataLoadModePage(entityNameKeyFilterAllOff)) {
          appDispatch(setEntityDataPage([entityNameKeyFilterAllOff, 1]));
        }
        appDispatch(setMutationEntity([entityNameKeyFilterAllOff, 'yes']));
        checkReturnParameters.Pop();
      }
    }
  }, [appDispatch, entityNameKeyFilterAllOff, newQuery, query]);

  return null;
};

export default EntityListFilterAllOffWrapper;
