import React from 'react';
import { Popover, PopoverOrigin, Box } from '@mui/material';
import { TColumnSchema } from '../../../../table-types/t-table-schema';
import { strategyMap } from './search-field-strategy/strategy-map';
import useStrategyHandler from './search-field-strategy/strategy-handler.hook';
import TEntityNameKeys from '../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';

type ISearchPopover = {
  entityNameKey: TEntityNameKeys;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  horizontal: PopoverOrigin['horizontal'];
  columnSchema: TColumnSchema;
};

export const SearchPopover: React.FC<ISearchPopover> = ({
  entityNameKey,
  anchorEl,
  handleClose,
  horizontal,
  columnSchema
}) => {
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
    entityNameKey,
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
        <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
          {searchPopoverElement}
        </Box>
      </Popover>
    </Box>
  );
};
