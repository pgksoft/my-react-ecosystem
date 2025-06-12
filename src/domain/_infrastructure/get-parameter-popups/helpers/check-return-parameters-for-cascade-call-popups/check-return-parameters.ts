type TPopupReturnParam = {
  returnPopup?: string;
  returnId?: string;
};

class CheckReturnParameters {
  // Fields
  private static instanceAbout: CheckReturnParameters | null = null;

  private popupReturnParams: TPopupReturnParam[] = [];

  // Properties
  static get instance(): CheckReturnParameters {
    if (!CheckReturnParameters.instanceAbout) {
      CheckReturnParameters.instanceAbout = new CheckReturnParameters();
    }
    return CheckReturnParameters.instanceAbout;
  }

  // Methods
  public Push(param: TPopupReturnParam): void {
    this.popupReturnParams.push(param);
  }

  public Pop(): TPopupReturnParam {
    const param = this.popupReturnParams.pop();
    if (param) return param;
    return {};
  }

  public Get(): TPopupReturnParam {
    const { length } = this.popupReturnParams;
    if (length) return this.popupReturnParams[length - 1];
    return {};
  }
}

export default CheckReturnParameters.instance;
