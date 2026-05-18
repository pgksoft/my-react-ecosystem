import TPopupList from '../t-choice-popup-list/t-popup-list';
import type {
  TPopupFilteredListRoute,
  TPopupListRoute
} from './popup-list-routes';

export type TChoicePopupList = Partial<
  Record<TPopupListRoute | TPopupFilteredListRoute, TPopupList>
>;

const choicePopupList: TChoicePopupList = {};

export default choicePopupList;
