import React, { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Theme,
  useTheme
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ListMenu, TSubMenuOpens } from '../ui/list-menu';
import { getTestUser } from '../../domain/users/util/get-test-user';
import useAppSelector from '../../store/use-app-selector';
import { appPageLinksValueSelector } from '../../redux-toolkit/app-page-links/app-page-links-selectors';
import initSubMenuOpens from '../helpers/init-sub-menu-opens';

export const drawerWidthLeft = 300;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      height: 48,
      justifyContent: 'flex-end',
      transition: '0.2s'
    }
  });
});

interface TLeftNavBar {
  drawerWidth: number;
  onClose: () => void;
}

export const LeftNavBar: React.FC<TLeftNavBar> = ({ drawerWidth, onClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [subMenuOpens, setSubMenuOpens] =
    useState<TSubMenuOpens>(initSubMenuOpens());
  const [width, setWidth] = useState(0);

  const { activeParentLink } = useAppSelector(appPageLinksValueSelector);
  const user = getTestUser();

  useEffect(() => {
    setTimeout(() => {
      setWidth(drawerWidth);
    }, 20);
  }, [drawerWidth]);

  useEffect(() => {
    const activeKey = Object.keys(subMenuOpens).find((key) => {
      return key === activeParentLink.appRoute;
    });
    if (activeKey) {
      setSubMenuOpens({ ...subMenuOpens, [activeKey]: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeParentLink]);

  return (
    <Drawer
      sx={{
        transition: '0.2s',
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          transition: '0.2s',
          width,
          boxSizing: 'border-box'
        }
      }}
      variant='persistent'
      anchor='left'
      open={drawerWidth === drawerWidthLeft}
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
      <Divider />
      <ListMenu
        userRoles={(user && user.userRoles) || []}
        subMenuOpens={subMenuOpens}
        setSubMenuOpens={setSubMenuOpens}
      />
    </Drawer>
  );
};
