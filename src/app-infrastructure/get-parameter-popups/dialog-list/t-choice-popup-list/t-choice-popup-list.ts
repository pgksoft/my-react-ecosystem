import type { TPopupListRoute } from '../const/popup-list-routes';
import TPopupList from './t-popup-list';

type TChoicePopupList = Partial<Record<TPopupListRoute, TPopupList>>;

export type { TChoicePopupList };
