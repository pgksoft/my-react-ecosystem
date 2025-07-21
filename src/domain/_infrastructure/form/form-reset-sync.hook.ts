import { useEffect } from 'react';
import { isToResetSelector } from '../../../redux-toolkit/reset-to-initial-data/reset-to-initial-data-selectors';
import {
  changeIsCanReset,
  changeIsToReset
} from '../../../redux-toolkit/reset-to-initial-data/reset-toInitial-data-slice';
import useAppDispatch from '../../../store/use-app-dispatch';
import useAppSelector from '../../../store/use-app-selector';

const useFormResetSync = (reset: () => void, isModified: boolean): void => {
  const dispatch = useAppDispatch();
  const isToReset = useAppSelector(isToResetSelector);

  useEffect(() => {
    dispatch(changeIsCanReset(isModified));
  }, [dispatch, isModified]);

  useEffect(() => {
    if (isToReset) {
      reset();
      dispatch(changeIsToReset(false));
    }
  }, [dispatch, isToReset, reset]);
};

export default useFormResetSync;
