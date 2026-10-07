import { getArrayAsStringConst } from '../../app-helpers/get-array-as-string-const';

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
