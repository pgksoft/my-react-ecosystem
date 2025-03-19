import { useSelector } from 'react-redux';
import { TStoreState } from './store';

const useAppSelector = useSelector.withTypes<TStoreState>();

export default useAppSelector;
