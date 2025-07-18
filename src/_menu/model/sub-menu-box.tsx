import React, { CSSProperties, FC } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Box, Button, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { COLORS } from '../../_const/colors';
import { AdaptiveMenu } from '../../domain/_infrastructure/adaptive-menu/adaptive-menu';
import { isNotVisitorEntity } from '../../domain/users/util/match-name-roles';
import { getTestUser } from '../../domain/users/util/get-test-user';
import TLink from '../../domain/_infrastructure/types/t-link';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    subMenu: {
      marginLeft: '12px'
    },
    wrapperSubMenu: {
      background: COLORS.white,
      paddingTop: '4px',
      paddingBottom: '5px'
    },
    navLink: {
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      outline: '0px',
      border: '0px',
      padding: '8px',
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      appearance: 'none',
      alignItems: 'flex-end',
      WebkitBoxPack: 'start',
      justifyContent: 'flex-start',
      WebkitBoxAlign: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&>:nth-child(2)': {
        paddingLeft: '12px'
      },
      fontSize: '1rem',
      fontWeight: 'bolder',
      whiteSpace: 'nowrap',
      lineHeight: '1.75',
      color: COLORS.gray,
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 7
      },
      '&:active': {
        background: 'rgba(0, 0, 0, 0.08)'
      }
    },
    subNavLink: {},
    disableButtonLink: {
      textTransform: 'none',
      margin: '0px',
      padding: '0px'
    }
  });
});

const activeNavLink: CSSProperties = {
  color: COLORS.primaryMain,
  paddingBottom: '4px',
  borderBottom: `2px solid ${COLORS.primaryMain}`,
  pointerEvents: 'none'
};

type TMeinMenu = {
  links: TLink[];
};

export const SubMenuBox: FC<TMeinMenu> = ({ links }) => {
  const classes = useStyles();

  const user = getTestUser();

  const getListSubMenu = (): JSX.Element => {
    const listSubMenu = links.map((link) => {
      if (link.entityNameKey && isNotVisitorEntity(user, link.entityNameKey))
        return <></>;
      if (link.disable) {
        return (
          <Button
            className={clsx(
              classes.navLink,
              classes.subNavLink,
              classes.disableButtonLink
            )}
            disabled
            color='secondary'
          >
            {link.title && link.title}
          </Button>
        );
      }
      return (
        <NavLink
          className={clsx(classes.navLink, classes.subNavLink)}
          style={({ isActive }) => {
            return isActive ? { ...activeNavLink } : {};
          }}
          key={link.appRoute}
          to={link.appRoute}
        >
          {link.title}
        </NavLink>
      );
    });
    return <AdaptiveMenu menuKey='ListSubMenu' elements={listSubMenu} />;
  };

  return (
    <Box className={classes.wrapperSubMenu}>
      <Box className={classes.subMenu}>{getListSubMenu()}</Box>
    </Box>
  );
};
