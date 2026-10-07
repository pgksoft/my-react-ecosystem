import React, { ReactNode } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SearchIcon from '@mui/icons-material/Search';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ListAltIcon from '@mui/icons-material/ListAlt';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { type TColumnType } from '../table-types/t-column-schemas';

type TIconElement = (isPrimaryColor: boolean) => ReactNode;

const iconElement = (Icon: SvgIconComponent, isPrimaryColor: boolean) => {
  return <Icon color={isPrimaryColor ? 'primary' : 'disabled'} />;
};

const ICONS: Record<TColumnType, TIconElement | null> = {
  search: (isPrimaryColor) => {
    return iconElement(SearchIcon, isPrimaryColor);
  },
  checkBox: (isPrimaryColor) => {
    return iconElement(ChecklistIcon, isPrimaryColor);
  },
  calendar: (isPrimaryColor) => {
    return iconElement(DateRangeIcon, isPrimaryColor);
  },
  'fixed-set-numerical-ranges': (isPrimaryColor) => {
    return iconElement(ListAltIcon, isPrimaryColor);
  },
  null: null
};

const getHeadingColumnIcon = (
  type: TColumnType,
  isPrimaryColor: boolean
): ReactNode => {
  return ICONS[type]?.(isPrimaryColor);
};

export default getHeadingColumnIcon;
