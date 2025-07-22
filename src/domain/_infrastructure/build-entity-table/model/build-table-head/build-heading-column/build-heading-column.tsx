import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Popover,
  PopoverOrigin,
  Theme,
  Typography
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { TColumnSchema } from '../../../table-types/t-table-schema';
import getHeadingColumnIcon from '../../../helpers/get-heading-column-icon';
import useGetParameter from '../../../../../../_hooks/get-parameter.hooks/get-parameter.hook';
import useBuildUrl from '../../../../../../_hooks/get-parameter.hooks/build-url.hook';
import { TITLES_BUILD_TABLE } from '../../../const/title';
import { SearchOrderBy } from './search-order-by/search-order-by';
import { SearchPopover } from './search-popover/search-popover';
import TEntityNameKeys from '../../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import useAppDispatch from '../../../../../../store/use-app-dispatch';
import { setMutationEntity } from '../../../../../../redux-toolkit/mutation-entities/mutation-entities-slice';

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
    },
    popover: {
      pointerEvents: 'none'
    },
    popoverButton: {
      pointerEvents: 'auto'
    },
    paper: {
      padding: '8px'
    }
  });
});

type TBuildHeadingColumnTable = {
  entityNameKey: TEntityNameKeys;
  columnSchema: TColumnSchema;
  horizontal: PopoverOrigin['horizontal'];
};

const BuildHeadingColumn: FC<TBuildHeadingColumnTable> = (props) => {
  const { entityNameKey, columnSchema, horizontal } = props;
  const classes = useStyles();

  const { isSort, type, title } = columnSchema;

  const dataKey = columnSchema?.nameGetParameter || columnSchema.dataKey;

  const [getParameterDataKey] = useGetParameter(dataKey);
  const [getParameterDateBefore] = useGetParameter(`${dataKey}[before]`);
  const [getParameterDateAfter] = useGetParameter(`${dataKey}[after]`);
  const getParameterDataKeyArray = useGetParameter(`${dataKey}[]`);

  const urlWithoutParameterDataKey = useBuildUrl({
    getParameters: {},
    withoutParameters: [
      dataKey,
      `${dataKey}[]`,
      `${dataKey}[after]`,
      `${dataKey}[before]`
    ]
  });

  const isPrimary =
    !!getParameterDataKey ||
    !!getParameterDataKeyArray.length ||
    !!getParameterDateBefore ||
    !!getParameterDateAfter;

  const Icon = getHeadingColumnIcon(type, isPrimary);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const searchPopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
    setIsSearchOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const searchPopoverClose = () => {
    setAnchorEl(null);
    setIsSearchOpen(false);
  };

  const handleCleanSearch = () => {
    setAnchorEl(null);
    navigate(urlWithoutParameterDataKey);
    appDispatch(setMutationEntity([entityNameKey, 'yes']));
  };

  return (
    <Box className={classes.cellSelection} onMouseLeave={handlePopoverClose}>
      {Icon && (
        <>
          <IconButton
            className={classes.iconButton}
            disableRipple
            onClick={searchPopoverOpen}
            onMouseEnter={handlePopoverOpen}
          >
            {Icon}
          </IconButton>
          <Popover
            className={classes.popover}
            classes={{
              paper: classes.paper
            }}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Button
              className={classes.popoverButton}
              onClick={handleCleanSearch}
              size='small'
            >
              {TITLES_BUILD_TABLE.cleanSearch}
            </Button>
          </Popover>
        </>
      )}
      {!Icon && <Box className={classes.iconButton} />}
      <Typography sx={{ paddingRight: '8px' }}>{title}</Typography>
      {isSort && <SearchOrderBy dataKey={dataKey} />}
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
