import React from 'react';
import { Popover, PopoverOrigin, Box } from '@mui/material';
import { TColumnSchema } from '../../../../table-types/t-table-schema';
import useStrategySearchHandler from './search-field-strategy/strategy-handler.hook';
import TEntityNameKeys from '../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { strategySearchMap } from './search-field-strategy/strategy-map';

type ISearchPopover = {
  entityNameKey: TEntityNameKeys;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  horizontal: PopoverOrigin['horizontal'];
  columnSchema: TColumnSchema<string>;
};

export const SearchPopover: React.FC<ISearchPopover> = ({
  entityNameKey,
  anchorEl,
  handleClose,
  horizontal,
  columnSchema
}) => {
  const id = anchorEl ? 'simple-popover' : undefined;

  const strategySearch = useStrategySearchHandler(
    columnSchema,
    strategySearchMap
  );

  const searchPopoverElement = strategySearch({
    entityNameKey,
    columnSchema,
    handleClose
  });

  return (
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
  );
};
