import {
  TPopupFilteredListRoute,
  TPopupListRoute
} from '../../dialog-list/t-choice-popup-list/t-popup-list-route';
import { TGetParameters } from '../../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import choicePopupList from '../../dialog-list/const/choice-popup-list';

type TEntityPopupListRoute = TPopupListRoute | TPopupFilteredListRoute;

class CheckListSearchParameters {
  // Fields
  private static instanceAbout: CheckListSearchParameters | null = null;

  private listSearchParameters: Partial<
    Record<TEntityPopupListRoute, TGetParameters>
  > = {};

  // Properties
  static get instance(): CheckListSearchParameters {
    if (!CheckListSearchParameters.instanceAbout) {
      CheckListSearchParameters.instanceAbout = new CheckListSearchParameters();
    }
    return CheckListSearchParameters.instanceAbout;
  }

  // Methods
  public Get(popupListRoute: TEntityPopupListRoute): TGetParameters {
    const listSearchParams = this.listSearchParameters[popupListRoute];
    if (listSearchParams) return listSearchParams;
    return {};
  }

  public Set(
    entityPopupListRoute: TEntityPopupListRoute,
    listSearchParameters: TGetParameters
  ): void {
    this.listSearchParameters[entityPopupListRoute] = listSearchParameters;
  }
}

export default CheckListSearchParameters.instance;

// Helpers
export const isEntityPopupListRoute = (
  value: string
): value is TEntityPopupListRoute => {
  return Object.keys(choicePopupList).includes(value);
};
