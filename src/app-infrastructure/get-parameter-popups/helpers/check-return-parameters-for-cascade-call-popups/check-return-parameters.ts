import type TCascadeParams from '../../../app-types/t-cascade-params';
import type TEmptyObject from '../../../app-types/t-empty-object';

const storageKey = 'check-popup-return';

class CheckReturnParameters {
  private constructor() {
    this.cascadeParams = [];
    this.Save();
  }

  // Fields
  private static instanceAbout: CheckReturnParameters | null = null;

  private cascadeParams: TCascadeParams[] = [];

  // Properties
  static get instance(): CheckReturnParameters {
    if (!CheckReturnParameters.instanceAbout) {
      CheckReturnParameters.instanceAbout = new CheckReturnParameters();
    }
    return CheckReturnParameters.instanceAbout;
  }

  // Methods
  public Push(param: TCascadeParams): void {
    const { returnPopup } = this.Get();
    const { returnPopup: newReturnPopup } = param;
    const isNewParams =
      (!!returnPopup && returnPopup !== newReturnPopup) || !returnPopup;
    if (isNewParams) {
      this.cascadeParams.push(param);
      this.Save();
    }
  }

  public Pop(): TCascadeParams | TEmptyObject {
    const param = this.cascadeParams.pop();
    this.Save();
    if (param) return param;
    return {};
  }

  public Get(): TCascadeParams | TEmptyObject {
    const { length } = this.cascadeParams;
    if (length) return this.cascadeParams[length - 1];
    return {};
  }

  // Debug helpers
  private Save(): void {
    sessionStorage.setItem(storageKey, JSON.stringify(this.cascadeParams));
  }
}

export default CheckReturnParameters.instance;
