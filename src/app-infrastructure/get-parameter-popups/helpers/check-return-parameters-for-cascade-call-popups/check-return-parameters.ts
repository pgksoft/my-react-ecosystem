import createArrayGuardOfTypePredicate from '../../../app-helpers/create-array-guard-of-type-predicate';
import isPlainObject from '../../../app-helpers/is-plain-object';
import type TCascadeParams from '../../../app-types/t-cascade-params';
import type TEmptyObject from '../../../app-types/t-empty-object';
import type TypeGuard from '../../../app-types/type-guard';

const storageKey = 'check-popup-return';

class CheckReturnParameters {
  private constructor() {
    this.cascadeParams = [];
    this.SaveParams();
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
      this.SaveParams();
    }
  }

  public Pop(): TCascadeParams | TEmptyObject {
    this.GetParams();
    const param = this.cascadeParams.pop();
    this.SaveParams();
    if (param) return param;
    return {};
  }

  public Get(): TCascadeParams | TEmptyObject {
    this.GetParams();
    const { length } = this.cascadeParams;
    if (length) return this.cascadeParams[length - 1];
    return {};
  }

  // Private methods
  private SaveParams(): void {
    localStorage.setItem(storageKey, JSON.stringify(this.cascadeParams));
  }

  private GetParams(): void {
    this.cascadeParams = [];
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const temp = JSON.parse(raw);
        if (this.IsArrayCascadeParams(temp)) {
          this.cascadeParams = [...temp];
        }
      }
    } catch {
      this.cascadeParams = [];
    }
  }

  private IsCascadeParams: TypeGuard<TCascadeParams> = (
    value
  ): value is TCascadeParams => {
    if (!isPlainObject(value)) return false;

    if (!('returnPopup' in value) || typeof value.returnPopup !== 'string')
      return false;

    return true;
  };

  private IsArrayCascadeParams = createArrayGuardOfTypePredicate(
    this.IsCascadeParams
  );
}

export default CheckReturnParameters.instance;
