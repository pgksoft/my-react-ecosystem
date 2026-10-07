import { TGetParameters } from '../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import choicePopupList from '../../dialog-list/const/choice-popup-list';
import type {
  TPopupFilteredListRoute,
  TPopupListRoute
} from '../../dialog-list/const/popup-list-routes';

const storageKey = 'check-list-search-return';

type TEntityPopupListRoute = TPopupListRoute | TPopupFilteredListRoute;

class CheckListSearchParameters {
  private constructor() {
    this.Save();
  }

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
    this.Save();
  }

  // Debug helpers
  private Save(): void {
    sessionStorage.setItem(
      storageKey,
      JSON.stringify(this.listSearchParameters)
    );
  }
}

export default CheckListSearchParameters.instance;

// Helpers
export const isEntityPopupListRoute = (
  value: unknown
): value is TEntityPopupListRoute => {
  return (
    typeof value === 'string' && Object.keys(choicePopupList).includes(value)
  );
};
