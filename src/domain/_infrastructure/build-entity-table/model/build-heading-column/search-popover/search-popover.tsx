import React from 'react';
import { Popover, PopoverOrigin, Typography, Theme, Box } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { TColumnSchema } from '../../../table-types/t-table-schema';
import { ColumnType } from '../../../table-types/t-column-schemas';
import { SearchListCheckbox } from './search-popover-components/search-list-checkbox';
import { SearchTextField } from './search-popover-components/search-text-field';
import { SearchDate } from './search-popover-components/search-date';
import { strategyMap } from './search-field-strategy/strategy-map';
import useStrategyHandler from './search-field-strategy/strategy-handler.hook';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    typography: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column'
    }
  });
});

interface ISearchPopover {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  horizontal: PopoverOrigin['horizontal'];
  columnSchema: TColumnSchema;
}

export const SearchPopover: React.FC<ISearchPopover> = ({
  anchorEl,
  handleClose,
  horizontal,
  columnSchema
}) => {
  const classes = useStyles();
  const id = anchorEl ? 'simple-popover' : undefined;

  const { title } = columnSchema;
  const dataKey = columnSchema?.nameGetParameter || columnSchema.dataKey;
  const onClose = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      handleClose();
    }
  };

  const strategyFn = useStrategyHandler(columnSchema, strategyMap);

  const searchPopoverElement = strategyFn({
    dataKey,
    title,
    columnSchema
  });

  return (
    <Box onKeyDown={onClose}>
      <Popover
        id={id}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal
        }}
      >
        <Typography className={classes.typography}>
          {searchPopoverElement}
          {/* {columnSchema.type === ColumnType.checkBox && (
            <SearchListCheckbox
              dataKey={dataKey}
              inCheckboxes={columnSchema.checkboxes}
              text={title}
            />
          )}
          {columnSchema.type === ColumnType.search && (
            <SearchTextField
              dataKey={dataKey}
              inValue={columnSchema.valueSearch}
              text={title}
            />
          )}
          {columnSchema.type === ColumnType.calendar && (
            <SearchDate
              dataKey={dataKey}
              inDateValue={columnSchema.dateSearch}
              text={title}
            />
          )} */}
        </Typography>
      </Popover>
    </Box>
  );
};
