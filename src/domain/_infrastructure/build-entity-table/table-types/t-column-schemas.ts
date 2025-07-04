export enum ColumnType {
  search,
  checkBox,
  null,
  calendar
}

export type TColumnStingSearch = {
  type: ColumnType.search;
  valueSearch: string;
};

type TColumnCheckboxItem = {
  key: string;
  title: string;
  value: boolean;
};

export type TColumnCheckboxItems = TColumnCheckboxItem[];

export type TColumnCheckboxSearch = {
  type: ColumnType.checkBox;
  checkboxes: TColumnCheckboxItems;
};

export type TColumnOnlyTitle = {
  type: ColumnType.null;
};

export type TColumnDateSearch = {
  beforeCreateDate: null;
  afterCreateDate: null;
};

export type TColumnCalendar = {
  type: ColumnType.calendar;
  dateSearch: TColumnDateSearch;
};
