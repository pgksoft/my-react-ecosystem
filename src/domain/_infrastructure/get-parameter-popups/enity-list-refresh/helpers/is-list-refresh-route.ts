import LIST_REFRESH_ROUTES from '../const/list-refresh-routes';
import TListRefreshRoute from '../t-choice-list-refresh/t-list-refresh-route';

const isListRefreshRoute = (value: string): value is TListRefreshRoute => {
  return Object.values(LIST_REFRESH_ROUTES).includes(
    value as TListRefreshRoute
  );
};

export default isListRefreshRoute;
