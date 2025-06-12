import TPopupList from '../t-choice-popup-list/t-popup-list';
import {
  TPopupFilteredListRoute,
  TPopupListRoute
} from '../t-choice-popup-list/t-popup-list-route';

export type TChoicePopupList = Partial<
  Record<TPopupListRoute | TPopupFilteredListRoute, TPopupList>
>;

const choicePopupList: TChoicePopupList = {};

export default choicePopupList;
