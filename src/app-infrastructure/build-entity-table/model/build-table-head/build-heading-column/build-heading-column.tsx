import React, { FC, useState } from 'react';
import {
  Box,
  IconButton,
  PopoverOrigin,
  Theme,
  Typography
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { TColumnSchema } from '../../../table-types/t-table-schema';
import getHeadingColumnIcon from '../../../helpers/get-heading-column-icon';
import { SortInOrder } from './sort-in-order/sort-in-order';
import { SearchPopover } from './search-popover/search-popover';
import TEntityNameKeys from '../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useEntitySearchParamsInLocalStorage from '../../../../app-hook-helpers/entity-search-params-in-local-storage.hook';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },
    cellSelection: {
      width: 'auto',
      minHeight: '24px',
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'pre'
    },
    iconButton: {
      marginRight: '8px'
    }
  });
});

type TBuildHeadingColumnTable = {
  entityNameKey: TEntityNameKeys;
  columnSchema: TColumnSchema<string>;
  horizontal: PopoverOrigin['horizontal'];
};

const BuildHeadingColumn: FC<TBuildHeadingColumnTable> = (props) => {
  const { entityNameKey, columnSchema, horizontal } = props;
  const classes = useStyles();

  const { isSort, type, title } = columnSchema;

  const dataKey = columnSchema?.nameGetParameter || columnSchema.dataKey;

  const { hasSearchParam } = useEntitySearchParamsInLocalStorage(
    entityNameKey,
    dataKey
  );

  const Icon = getHeadingColumnIcon(type, hasSearchParam());

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchPopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
    setIsSearchOpen(true);
  };

  const searchPopoverClose = () => {
    setAnchorEl(null);
    setIsSearchOpen(false);
  };

  return (
    <Box className={classes.cellSelection}>
      {Icon && (
        <IconButton
          className={classes.iconButton}
          disableRipple
          onClick={searchPopoverOpen}
        >
          {Icon}
        </IconButton>
      )}
      {!Icon && <Box className={classes.iconButton} />}
      <Typography sx={{ paddingRight: '8px' }}>{title}</Typography>
      {isSort && (
        <SortInOrder
          entityNameKey={entityNameKey}
          dataKey={columnSchema.dataKey}
        />
      )}
      {isSearchOpen && (
        <SearchPopover
          entityNameKey={entityNameKey}
          anchorEl={anchorEl}
          handleClose={searchPopoverClose}
          horizontal={horizontal}
          columnSchema={columnSchema}
        />
      )}
    </Box>
  );
};

export default BuildHeadingColumn;
