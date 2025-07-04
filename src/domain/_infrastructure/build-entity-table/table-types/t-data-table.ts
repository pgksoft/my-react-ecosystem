import { ReactNode } from 'react';
import TypeGuard from '../../types/type-guard';

type TPrimitiveValueType = string | number | boolean;

export type TValueType = TPrimitiveValueType | [] | ReactNode;

export type TFieldValue = TValueType[];

export type TDataRecord = Record<string, TFieldValue>;

export type TDataTable = TDataRecord[];

// Helper
export const isPrimitiveValueType: TypeGuard<TPrimitiveValueType> = (
  value: unknown
): value is TPrimitiveValueType => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  );
};
