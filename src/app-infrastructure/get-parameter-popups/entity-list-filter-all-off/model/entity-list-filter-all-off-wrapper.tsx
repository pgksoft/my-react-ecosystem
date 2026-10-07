import { useEffect, type FC } from 'react';
import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../redux-toolkit/mutation-entities/mutation-entities-slice';
import useEntitySearchParamsInLocalStorage from '../../../app-hook-helpers/entity-search-params-in-local-storage.hook';
import checkReturnParameters from '../../helpers/check-return-parameters-for-cascade-call-popups/check-return-parameters';

type TEntityListFilterAllOffWrapperProps = {
  entityNameKeyFilterAllOff: TEntityNameKeys;
  returnUrl: string;
};

const EntityListFilterAllOffWrapper: FC<TEntityListFilterAllOffWrapperProps> = (
  props
) => {
  const { entityNameKeyFilterAllOff, returnUrl } = props;

  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { removeAllSearchParams: removeSearchParams } =
    useEntitySearchParamsInLocalStorage(entityNameKeyFilterAllOff);
  removeSearchParams();

  useEffect(() => {
    navigate(returnUrl);
    appDispatch(setMutationEntity([entityNameKeyFilterAllOff, 'yes']));
    checkReturnParameters.Pop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default EntityListFilterAllOffWrapper;
