import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';

type TEntityListRefreshWrapperProps = {
  entityNameKeyRefresh: TEntityNameKeys;
  returnUrl: string;
};

const EntityListRefreshWrapper: FC<TEntityListRefreshWrapperProps> = (
  props
) => {
  const { entityNameKeyRefresh, returnUrl } = props;

  const navigate = useNavigate();
  const appDispatch = useAppDispatch();

  useEffect(() => {
    navigate(returnUrl);
    appDispatch(setMutationEntity([entityNameKeyRefresh, 'yes']));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default EntityListRefreshWrapper;
