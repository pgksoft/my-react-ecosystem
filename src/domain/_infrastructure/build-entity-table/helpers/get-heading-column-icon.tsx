import React, { ReactNode } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ColumnType } from '../table-types/t-column-schemas';

type TIconElement = (isPrimaryColor: boolean) => ReactNode;

const iconElement = (Icon: SvgIconComponent, isPrimaryColor: boolean) => {
  return <Icon color={isPrimaryColor ? 'primary' : 'disabled'} />;
};

const ICONS: Record<ColumnType, TIconElement | null> = {
  [ColumnType.search]: (isPrimaryColor) => {
    return iconElement(SearchIcon, isPrimaryColor);
  },
  [ColumnType.checkBox]: (isPrimaryColor) => {
    return iconElement(ArrowDropDownIcon, isPrimaryColor);
  },
  [ColumnType.null]: null,
  [ColumnType.calendar]: (isPrimaryColor) => {
    return iconElement(CalendarTodayIcon, isPrimaryColor);
  }
};

const getHeadingColumnIcon = (
  type: ColumnType,
  isPrimaryColor: boolean
): ReactNode => {
  return ICONS[type]?.(isPrimaryColor);
};

export default getHeadingColumnIcon;
