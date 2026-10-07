import type TUnknownRecord from '../app-types/t-unknown-record';

export type TValidField<T> = {
  [K in keyof T]: {
    valid: boolean;
    errorMsg: string;
  };
};

export type TValidationState<T> = {
  dto: T;
  dtoValid: TValidField<T>;
  handleValueChange: (fieldName: string, value: unknown) => void;
  isModified: boolean;
  isValid: boolean;
  reset: () => void;
};

export type TInitialValidationDto<T> = {
  validationDto: T;
  isSerialization: boolean;
};

export type TGetInitialValidationDto<T extends TUnknownRecord> = (options: {
  isSerialization: boolean;
}) => TInitialValidationDto<T>;

export type TGetDetailInitialValidationDto<T extends TUnknownRecord> =
  (options: {
    isSerialization: boolean;
    entity: unknown;
  }) => TInitialValidationDto<T>;
