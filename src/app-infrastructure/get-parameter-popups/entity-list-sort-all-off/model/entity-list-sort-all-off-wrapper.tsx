import { useEffect, type FC } from 'react';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../store/use-app-dispatch';
import useEntitySearchParamsInLocalStorage from '../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import { setMutationEntity } from '../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';

type TEntityListSortAllOffWrapperProps = {
  entityNameKeySortAllOff: TEntityNameKeys;
  returnUrl: string;
};

const EntityListSortAllOffWrapper: FC<TEntityListSortAllOffWrapperProps> = (
  props
) => {
  const { entityNameKeySortAllOff, returnUrl } = props;

  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { removeAllSearchParams: removeSortParams } =
    useEntitySearchParamsInLocalStorage(
      entityNameKeySortAllOff,
      undefined,
      'sort'
    );
  removeSortParams();

  useEffect(() => {
    navigate(returnUrl);
    appDispatch(setMutationEntity([entityNameKeySortAllOff, 'yes']));
    checkReturnParameters.Pop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default EntityListSortAllOffWrapper;
