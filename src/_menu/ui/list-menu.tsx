import React, { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  Theme
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IUserRole } from '../../domain/users/entity/role';
import { LINKS_AUTH_USER } from '../../_route/links';
import { isLinkName } from '../../_route/types/is-link-name';
import { getGroupMenuKeys } from '../util/get-group-menu-keys';
import { COLORS } from '../../_const/colors';
import choiceIcon from '../choice-icon/choice-icon';
import getRandomUuid from '../../domain/_infrastructure/helpers/get-random-uuid';
import TLink from '../../domain/_infrastructure/types/t-link';

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
        paddingLeft: '8px'
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
  fontWeight: 'bold'
};

const activeSubNavLink = {
  WebkitTapHighlightColor: 'transparent',
  color: COLORS.primaryLight,
  fontWeight: 600,
  strokeWidth: '2',
  stroke: COLORS.primaryLight
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
        if (!isLinkName(key)) return null;
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
            <ListItem key={getRandomUuid()}>
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
              <Box sx={{ pl: 4, pr: 1 }}>
                <Box
                  sx={{
                    p: 0.5,
                    boxSizing: 'border-box',
                    borderRadius: 3,
                    boxShadow:
                      '1px 1px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)'
                  }}
                >
                  {subMenuLinks.map((link, index) => {
                    return (
                      <>
                        <ListItem key={link.url} disablePadding>
                          <ItemSubNavLink link={link} />
                        </ListItem>
                        {index !== subMenuLinks?.length - 1 && (
                          <Divider variant='middle' sx={{ opacity: 0.6 }} />
                        )}
                      </>
                    );
                  })}
                </Box>
              </Box>
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
  const nameIcon = link?.nameIcon;
  return (
    <NavLink
      key={link.url}
      className={classes.navLink}
      to={link.url}
      style={({ isActive }) => {
        return isActive ? { ...activeNavLink } : {};
      }}
    >
      {nameIcon && choiceIcon[nameIcon]()}
      {link.title && <span>{link.title}</span>}
    </NavLink>
  );
};

const ItemSubNavLink: FC<TItemNavLink> = ({ link }) => {
  const classes = useStyles();
  const nameIcon = link?.nameIcon;
  return (
    <NavLink
      key={link.url}
      className={classes.navLink}
      to={link.url}
      style={({ isActive }) => {
        return isActive ? { ...activeSubNavLink } : {};
      }}
    >
      {nameIcon && choiceIcon[nameIcon]()}
      {link.title && <span>{link.title}</span>}
    </NavLink>
  );
};
