/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Box, IconButton, Popover, Paper, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { COLORS } from '../../../_const/colors';
import { getNewMenuState, INewMenu, TMenu } from './helpers/get-new-menu-state';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    lineContainer: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      flexWrap: 'nowrap'
    },
    popUpButtonContainer: {
      width: '4.5%',
      height: '100%',
      alignItems: 'center',
      flexWrap: 'nowrap',
      justifyContent: 'flex-end'
    },
    lineContainerWithPopUp: {
      width: '94.5%'
    },
    lineContainerWithoutPopUp: {
      width: '100%'
    },
    popUpButtonContainerWithPopUp: {
      display: 'flex'
    },
    popUpButtonContainerWithoutPopUp: {
      display: 'none'
    },
    element: {
      height: '100%'
    },
    popUp: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      overflow: 'auto',
      maxHeight: '40vh',
      maxWidth: '70vw',
      padding: '8px'
    },
    popUpElement: {
      display: 'flex',
      width: '100%',
      '&:not(:lastChild)': {
        marginBottom: '8px'
      }
    },
    buttonOpenPopup: {
      color: COLORS.primaryMain
    }
  });
});

interface IProps {
  elements: JSX.Element[];
  menuKey: string;
  className?: string;
  style?: React.CSSProperties;
  popUpClassName?: string;
}

export const AdaptiveMenu: React.FC<IProps> = ({
  elements,
  menuKey,
  className,
  style,
  popUpClassName
}) => {
  // Styles
  const classes = useStyles();
  // Refs
  const refLineContainer = useRef<HTMLDivElement>(null);
  // States
  const [menu, setMenu] = useState<TMenu>({
    lineItems: elements,
    popUpItems: []
  });
  const [withPopUp, setWithPopUp] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const onPopUpButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onPopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  useEffect(() => {
    setMenu({
      lineItems: elements,
      popUpItems: []
    });
  }, [elements]);

  useEffect(() => {
    const lineContainer = refLineContainer.current;
    if (lineContainer) {
      const newMenu: INewMenu = getNewMenuState(
        elements,
        lineContainer,
        menuKey
      );
      if (newMenu.isNewMenu) {
        setWithPopUp(true);
        setMenu(newMenu.menu);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu, refLineContainer.current]);

  return (
    <Box className={clsx(classes.root, className)} style={style}>
      <div
        ref={refLineContainer}
        className={clsx({
          [classes.lineContainer]: true,
          [classes.lineContainerWithPopUp]: withPopUp,
          [classes.lineContainerWithoutPopUp]: !withPopUp
        })}
      >
        {menu.lineItems.map((item, i) => {
          return (
            <span
              data-name={menuKey}
              key={item.key || `${menuKey}-${i}`}
              className={classes.element}
            >
              {item}
            </span>
          );
        })}
      </div>
      <Box
        className={clsx({
          [classes.popUpButtonContainer]: true,
          [classes.popUpButtonContainerWithPopUp]: withPopUp,
          [classes.popUpButtonContainerWithoutPopUp]: !withPopUp
        })}
      >
        <IconButton
          className={classes.buttonOpenPopup}
          size='small'
          onClick={onPopUpButtonClick}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onPopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Paper className={clsx(classes.popUp, popUpClassName)}>
          {menu.popUpItems.map((item, i) => {
            return (
              <Box
                key={item.key || `popUpItems${i}`}
                className={classes.popUpElement}
                onClick={() => {
                  setAnchorEl(null);
                }}
              >
                {item}
              </Box>
            );
          })}
        </Paper>
      </Popover>
    </Box>
  );
};
