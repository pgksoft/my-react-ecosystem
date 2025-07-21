import TypeGuard from '../types/type-guard';

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
