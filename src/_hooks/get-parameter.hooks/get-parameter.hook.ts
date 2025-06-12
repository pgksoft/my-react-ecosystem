import { useLocation } from 'react-router-dom';
import TDialogParameters from '../../domain/_infrastructure/get-parameter-popups/types-parameters-popup/t-dialog-parameters';

const useGetParameter = (name: TDialogParameters): string[] => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return query.getAll(name);
};

export default useGetParameter;
