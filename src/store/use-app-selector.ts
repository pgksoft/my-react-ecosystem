import { useSelector } from 'react-redux';
import { TRootState } from './store';

const useAppSelector = useSelector.withTypes<TRootState>();

export default useAppSelector;
