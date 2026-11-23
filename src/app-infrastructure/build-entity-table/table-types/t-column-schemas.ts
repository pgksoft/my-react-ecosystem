import { getArrayAsStringConst } from '../../app-helpers/get-array-as-string-const';
import isPlainObject from '../../app-helpers/is-plain-object';
import type TypeGuard from '../../app-types/type-guard';

const columnType = getArrayAsStringConst(
  'search',
  'checkBox',
  'calendar',
  'fixed-set-numerical-ranges',
  'null'
);

export type TColumnType = (typeof columnType)[number];

export type TWithoutSearchTypeColumn = Extract<TColumnType, 'null'>;
export type TStringSearchTypeColumn = Extract<TColumnType, 'search'>;
export type TCheckBoxSearchTypeColumn = Extract<TColumnType, 'checkBox'>;
export type TCalendarSearchTypeColumn = Extract<TColumnType, 'calendar'>;
export type TFixedNumericalRangesSearchTypeColumn = Extract<
  TColumnType,
  'fixed-set-numerical-ranges'
>;

export type TColumnStingSearch = {
  type: TStringSearchTypeColumn;
  valueSearch: string;
};

export const isTColumnStingSearch: TypeGuard<TColumnStingSearch> = (
  value
): value is TColumnStingSearch => {
  if (!isPlainObject(value)) return false;

  if (
    !('type' in value) ||
    typeof value.type !== 'string' ||
    value.type !== 'search'
  )
    return false;
  if (!('valueSearch' in value) || typeof value.valueSearch !== 'string')
    return false;

  return true;
};

export type TColumnCheckboxItem = {
  key: string;
  title: string;
  value: boolean;
};

export type TColumnCheckboxItems = TColumnCheckboxItem[];

export type TColumnCheckboxSearch = {
  type: TCheckBoxSearchTypeColumn;
  checkboxes: TColumnCheckboxItems;
};

export const isTColumnCheckboxSearch: TypeGuard<TColumnCheckboxSearch> = (
  value
): value is TColumnCheckboxSearch => {
  if (!isPlainObject(value)) return false;

  if (
    !('type' in value) ||
    typeof value.type !== 'string' ||
    value.type !== 'checkBox'
  )
    return false;
  if (!('checkboxes' in value) || !Array.isArray(value.checkboxes))
    return false;

  //TODO isTColumnCheckboxItemArray

  return true;
};

export type TColumnOnlyTitle = {
  type: TWithoutSearchTypeColumn;
};

export type TColumnDateSearch = {
  fromDate: string | null;
  toDate: string | null;
};

export type TColumnCalendar = {
  type: TCalendarSearchTypeColumn;
  dateSearch: TColumnDateSearch;
};

export const isTColumnCalendar: TypeGuard<TColumnCalendar> = (
  value
): value is TColumnCalendar => {
  if (!isPlainObject(value)) return false;

  if (
    !('type' in value) ||
    typeof value.type !== 'string' ||
    value.type !== 'calendar'
  )
    return false;

  //TODO isTColumnDateSearch

  if (!('dateSearch' in value) || !isPlainObject(value.dateSearch))
    return false;

  return true;
};

export type TColumnNumericalSearch = { fromNum: number; toNum: number };

export type TColumnFixedRangeNumericalSearch = {
  title: string;
} & TColumnNumericalSearch;

export type TColumnFixedNumericalRangeItems =
  TColumnFixedRangeNumericalSearch[];

export type TColumnFixedNumericalRanges = {
  type: TFixedNumericalRangesSearchTypeColumn;
  ranges: TColumnFixedNumericalRangeItems;
};

export const isTColumnFixedNumericalRanges: TypeGuard<
  TColumnFixedNumericalRanges
> = (value): value is TColumnFixedNumericalRanges => {
  if (!isPlainObject(value)) return false;

  if (
    !('type' in value) ||
    typeof value.type !== 'string' ||
    value.type !== 'fixed-set-numerical-ranges'
  )
    return false;

  if (
    !('ranges' in value) ||
    !Array.isArray(value.ranges) ||
    value.ranges.length !== 1
  )
    return false;

  //TODO isTColumnFixedRangeNumericalSearchArray

  return true;
};
