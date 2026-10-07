import { entityNameKeysList } from '../../api-platform/app-entities/helpers/entity-name-key-list';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import LIST_DIALOG_CREATE_ROUTES, {
  isDialogCreateKey,
  type TDialogCreateRoute
} from '../../get-parameter-popups/dialog-create/const/dialog-create-routes';
import LIST_DIALOG_DETAIL_ROUTES, {
  isDialogDetailKey,
  type TDialogDetailRoute
} from '../../get-parameter-popups/dialog-detail/const/dialog-detail-routes';

type TFormDtoKey = TDialogCreateRoute | TDialogDetailRoute;

type TFormDto<T extends TUnknownRecord> = T | null;

type TFormDtoSerialization<T extends TUnknownRecord> = Partial<
  Record<TFormDtoKey, TFormDto<T>>
>;

const getInitialFormDtoSerialization = <
  T extends TUnknownRecord
>(): TFormDtoSerialization<T> => {
  let initialFormDtoSerialization: TFormDtoSerialization<T> = {};
  entityNameKeysList.forEach((entityNameKey) => {
    if (isDialogCreateKey(entityNameKey)) {
      const dialogCreateRoute = LIST_DIALOG_CREATE_ROUTES[entityNameKey];
      if (dialogCreateRoute) {
        initialFormDtoSerialization = {
          ...initialFormDtoSerialization,
          [`${dialogCreateRoute}`]: null
        };
      }
    }
    if (isDialogDetailKey(entityNameKey)) {
      const dialogDetailRoute = LIST_DIALOG_DETAIL_ROUTES[entityNameKey];
      if (dialogDetailRoute) {
        initialFormDtoSerialization = {
          ...initialFormDtoSerialization,
          [`${dialogDetailRoute}`]: null
        };
      }
    }
  });
  return initialFormDtoSerialization;
};

class FormDtoSerialization {
  private constructor() {
    this.dtoSerialization = getInitialFormDtoSerialization<TUnknownRecord>();
    // this.DebugSave();
  }

  // Fields
  private static instanceThis: FormDtoSerialization | null = null;

  private dtoSerialization: TFormDtoSerialization<TUnknownRecord> = {};

  // Properties
  static get instance(): FormDtoSerialization {
    if (!FormDtoSerialization.instanceThis) {
      FormDtoSerialization.instanceThis = new FormDtoSerialization();
    }
    return FormDtoSerialization.instanceThis;
  }

  // Methods
  public Get<T extends TUnknownRecord>(formDtoKey: TFormDtoKey): TFormDto<T> {
    const formDto = this.dtoSerialization[formDtoKey];
    return (formDto as T) ?? null;
  }

  public Set<T extends TFormDto<TUnknownRecord>>(
    formDtoKey: TFormDtoKey,
    formDto: T
  ): void {
    this.dtoSerialization[formDtoKey] = formDto;
    // this.DebugSave();
  }

  public Clear(formDtoKey: TFormDtoKey): void {
    this.dtoSerialization[formDtoKey] = null;
    // this.DebugSave();
  }

  private DebugSave(): void {
    sessionStorage.setItem(
      'form-dto-serialization',
      JSON.stringify(this.dtoSerialization)
    );
  }
}

export default FormDtoSerialization.instance;
