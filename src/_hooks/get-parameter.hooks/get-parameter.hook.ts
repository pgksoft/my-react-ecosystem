import { useLocation } from 'react-router-dom';

const useGetParameter = (name: string): string[] => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return query.getAll(name);
};

export default useGetParameter;
