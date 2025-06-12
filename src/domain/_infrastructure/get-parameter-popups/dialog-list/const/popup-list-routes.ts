import TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import {
  TPopupFilteredListRoute,
  TPopupListRoute
} from '../t-choice-popup-list/t-popup-list-route';

type TPopupListRoutes = Partial<Record<TEntityNameKeys, TPopupListRoute>>;

const POPUP_LIST_ROUTES: TPopupListRoutes = {
  contact: 'ContactList',
  todo: 'TodoList'
};

type TEntityFilteredListKey = `${TEntityNameKeys}Filtered`;

type TPopupFilteredListRoutes = Partial<
  Record<TEntityFilteredListKey, TPopupFilteredListRoute>
>;

const POPUP_FILTERED_LIST_ROUTS: TPopupFilteredListRoutes = {
  contactFiltered: 'ContactFilteredList',
  todoFiltered: 'TodoFilteredList'
};

export { POPUP_LIST_ROUTES, POPUP_FILTERED_LIST_ROUTS };
