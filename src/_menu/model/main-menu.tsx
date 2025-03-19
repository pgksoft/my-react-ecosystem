import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Theme,
  Toolbar,
  Typography
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { COLORS } from '../../_const/colors';
import { LeftNavBar, drawerWidthLeft } from './left-nav-bar';
import { SubMenuBox } from './sub-menu-box';
import NavigationDefaultGoBackIconButton from '../../domain/_infrastructure/ui/navigation-default-go-back-icon-button/navigation-default-go-back-icon-button';
import useAppSelector from '../../store/use-app-selector';
import { appPageLinksValueSelector } from '../../redux-toolkit/app-page-links/app-page-links-selectors';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: { display: 'flex' },
    appBar: {
      transition: '.2s',
      background: COLORS.primaryMain
    },
    appBarShiftLeft: {
      marginLeft: `${drawerWidthLeft}px`,
      transition: '.2s'
    },
    appBarWidthLeft: {
      width: `calc(100% - ${drawerWidthLeft}px)`
    },
    content: {
      width: '100%',
      padding: '0 0.3%',
      transition: '.2s',
      backgroundColor: COLORS.white,
      overflow: 'hidden'
    }
  });
});

type TMainMenuProps = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
};

export const MainMenu: FC<TMainMenuProps> = ({ children }) => {
  const classes = useStyles();

  const [openLeft, setOpenLeft] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(true);

  const { activePageLink, activeParentLink } = useAppSelector(
    appPageLinksValueSelector
  );

  const isAuthenticated = true;

  const contentMarginTop = activeParentLink.subLinks ? '86px' : '50px';

  const timeoutShowSubMenu = () => {
    setShowSubMenu(false);
    const timer = setTimeout(() => {
      setShowSubMenu(true);
      clearTimeout(timer);
    }, 200);
  };

  const onLeftNavBarOpen = () => {
    timeoutShowSubMenu();
    setOpenLeft(true);
  };
  const onLeftNavBarClose = () => {
    timeoutShowSubMenu();
    setOpenLeft(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      if (openLeft) {
        onLeftNavBarClose();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classes.appBar}
        sx={{
          ...(openLeft && {
            marginLeft: `${drawerWidthLeft}px`,
            width: `calc(100% - ${drawerWidthLeft}px)`
          })
        }}
      >
        <Toolbar variant='dense'>
          {isAuthenticated && (
            <IconButton
              size='small'
              color='inherit'
              onClick={onLeftNavBarOpen}
              sx={{
                marginRight: 2,
                ...(openLeft && { display: 'none' })
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!openLeft && activeParentLink.isHaveDefaultGoBackIconButton && (
            <NavigationDefaultGoBackIconButton />
          )}
          {activeParentLink.title && (
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              {activeParentLink.title}
            </Typography>
          )}
        </Toolbar>
        {activeParentLink.subLinks && showSubMenu && (
          <SubMenuBox links={activeParentLink.subLinks} />
        )}
        {activePageLink.subLinks &&
          !activeParentLink.subLinks?.length &&
          showSubMenu && <SubMenuBox links={activePageLink.subLinks} />}
      </AppBar>
      <LeftNavBar
        drawerWidth={(openLeft && drawerWidthLeft) || 0}
        onClose={onLeftNavBarClose}
      />
      <Box
        component='main'
        className={classes.content}
        sx={{
          mt: contentMarginTop
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
