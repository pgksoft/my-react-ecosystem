import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TListRefreshRoute from '../t-choice-list-refresh/t-list-refresh-route';

type TListRefreshRoutes = Partial<Record<TEntityNameKeys, TListRefreshRoute>>;

const LIST_REFRESH_ROUTES: TListRefreshRoutes = {
  contact: 'ContactRefresh',
  todo: 'TodoRefresh'
};

export default LIST_REFRESH_ROUTES;
