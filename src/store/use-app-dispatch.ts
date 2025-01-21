import { useDispatch } from 'react-redux';
import { TAppDispatch } from './store';

const useAppDispatch = useDispatch.withTypes<TAppDispatch>();

export default useAppDispatch;
