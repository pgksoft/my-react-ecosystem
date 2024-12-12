import React, { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, IconButton, List, ListItem, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IUserRole } from '../../domain/users/entity/role';
import { LINKS_AUTH_USER, isTypeLinkTypes } from '../../_route/links';
import { getGroupMenuKeys } from '../util/get-group-menu-keys';
import { TLink } from '../../context/route-context';
import { COLORS } from '../../_const/colors';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    navLink: {
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      outline: '0px',
      border: '0px',
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      appearance: 'none',
      display: 'flex',
      alignItems: 'flex-end',
      color: 'inherit',
      WebkitBoxPack: 'start',
      justifyContent: 'flex-start',
      WebkitBoxAlign: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '8px 16px',
      transition: '0.3s',
      borderRadius: '9px',
      paddingTop: '4px',
      paddingBottom: '4px',
      '&>:nth-child(2)': {
        paddingLeft: '12px'
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      },
      '&:active': {
        background: 'rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box'
      }
    }
  });
});

const activeNavLink: CSSProperties = {
  WebkitTapHighlightColor: 'transparent',
  color: COLORS.primaryLight,
  // backgroundColor: `${COLORS.primaryLight} !important`,
  fontWeight: 'bold'
};

const activeSubNavLink = {
  WebkitTapHighlightColor: 'transparent',
  color: `${COLORS.primaryLight} !important`,
  fontWeight: 600,
  strokeWidth: '2',
  stroke: `${COLORS.primaryLight} !important`
};

export type TSubMenuOpens = {
  [key: string]: boolean;
};

type TListMenu = {
  userRoles: IUserRole[];
  subMenuOpens: TSubMenuOpens;
  setSubMenuOpens: (subMenuOpens: TSubMenuOpens) => void;
};

export const ListMenu: FC<TListMenu> = ({
  userRoles,
  subMenuOpens,
  setSubMenuOpens
}) => {
  const subMenuToggleOpens = (key: string) => {
    setSubMenuOpens({ ...subMenuOpens, [key]: !subMenuOpens[key] });
  };
  const groupMenuKeys = getGroupMenuKeys(userRoles);

  return (
    <List>
      {groupMenuKeys.map((key) => {
        if (!isTypeLinkTypes(key)) return null;
        const subMenuLinks = LINKS_AUTH_USER[key]?.subMenuLinks;
        if (!subMenuLinks) {
          return (
            <ListItem key={LINKS_AUTH_USER[key].url}>
              <ItemNavLink link={LINKS_AUTH_USER[key]} />
            </ListItem>
          );
        }
        return (
          <div key={LINKS_AUTH_USER[key].url}>
            <ListItem>
              <ItemNavLink link={LINKS_AUTH_USER[key]} />
              <IconButton
                sx={{ padding: '4px' }}
                onClick={() => {
                  subMenuToggleOpens(LINKS_AUTH_USER[key].url);
                }}
              >
                {subMenuOpens[LINKS_AUTH_USER[key].url] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </IconButton>
            </ListItem>
            <Collapse
              in={subMenuOpens[LINKS_AUTH_USER[key].url]}
              timeout='auto'
              unmountOnExit
            >
              <List component='div' disablePadding>
                {subMenuLinks.map((link) => {
                  return (
                    <ListItem key={link.url} sx={{ padding: '4px' }}>
                      <ItemSubNavLink link={link} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </div>
        );
      })}
    </List>
  );
};

type TItemNavLink = {
  link: TLink;
};

const ItemNavLink: FC<TItemNavLink> = ({ link }) => {
  const classes = useStyles();
  const getIcon = link?.getIcon;
  return (
    <NavLink
      key={link.url}
      className={classes.navLink}
      to={link.url}
      style={({ isActive }) => {
        return isActive ? { ...activeNavLink } : {};
      }}
    >
      {getIcon && getIcon()}
      <span>{link.title}</span>
    </NavLink>
  );
};

const ItemSubNavLink: FC<TItemNavLink> = ({ link }) => {
  const classes = useStyles();
  const getIcon = link?.getIcon;
  return (
    <NavLink
      key={link.url}
      className={classes.navLink}
      to={link.url}
      style={({ isActive }) => {
        return isActive ? { ...activeSubNavLink } : {};
      }}
    >
      {getIcon && getIcon()}
      <span>{link.title}</span>
    </NavLink>
  );
};
