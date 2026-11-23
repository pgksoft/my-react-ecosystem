import React from 'react';
import { Popover, PopoverOrigin, Box } from '@mui/material';
import { TColumnSchema } from '../../../../table-types/t-table-schema';
import useStrategySearchHandler from './search-field-strategy/strategy-handler.hook';
import TEntityNameKeys from '../../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import { strategySearchMap } from './search-field-strategy/strategy-map';
import type { TEntityPlacement } from '../../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';

type ISearchPopover = {
  entityNameKey: TEntityNameKeys;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  horizontal: PopoverOrigin['horizontal'];
  columnSchema: TColumnSchema<string>;
  entityPlacement?: TEntityPlacement;
};

export const SearchPopover: React.FC<ISearchPopover> = ({
  entityNameKey,
  anchorEl,
  handleClose,
  horizontal,
  columnSchema,
  entityPlacement = 'page'
}) => {
  const id = anchorEl ? 'simple-popover' : undefined;

  const strategySearch = useStrategySearchHandler(
    columnSchema,
    strategySearchMap
  );

  const searchPopoverElement = strategySearch({
    entityNameKey,
    columnSchema,
    handleClose,
    entityPlacement
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
