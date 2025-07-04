import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetParameter from '../../../../../../_hooks/get-parameter.hooks/get-parameter.hook';
import CustomSortLabel, { TOrder } from './custom-sort-label';
import useBuildUrl from '../../../../../../_hooks/get-parameter.hooks/build-url.hook';

interface ISearchOrderBy {
  dataKey: string;
}

export const SearchOrderBy: React.FC<ISearchOrderBy> = ({ dataKey }) => {
  const [getParameterOrder] = useGetParameter(`order[${dataKey}]`);
  const [order, setOrder] = useState<TOrder>(initValueOrder(getParameterOrder));
  const getParameters = { [`order[${dataKey}]`]: order };
  const url = useBuildUrl(getParameters);
  const urlWithoutParameterOrder = useBuildUrl({}, [`order[${dataKey}]`]);

  const navigate = useNavigate();

  const handleRequestSort = () => {
    switch (order) {
      case 'asc':
        setOrder('desc');
        break;
      case 'desc':
        setOrder('');
        break;
      case '':
        setOrder('asc');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (order) {
      navigate(url);
    } else {
      navigate(urlWithoutParameterOrder);
    }
  }, [navigate, order, url, urlWithoutParameterOrder]);

  return <CustomSortLabel direction={order} onClick={handleRequestSort} />;
};

// Helpers
const initValueOrder = (str: string | null): TOrder => {
  if (str === 'asc' || str === 'desc') {
    return str;
  }
  return '';
};
