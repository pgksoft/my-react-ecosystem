import React, { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './styles/use-styles';
import choiceIcon from '../choice-icon/choice-icon';
import TLink from '../../domain/_infrastructure/types/t-link';
import { COLORS } from '../../_const/colors';

interface TItemNavLink {
  link: TLink;
}

const activeNavLink: CSSProperties = {
  WebkitTapHighlightColor: 'transparent',
  color: COLORS.primaryLight,
  fontWeight: 'bold'
};

export const ItemNavLink: FC<TItemNavLink> = ({ link }) => {
  const classes = useStyles();
  const nameIcon = link?.nameIcon;
  return (
    <NavLink
      key={link.appRoute}
      className={classes.navLink}
      to={link.appRoute}
      style={({ isActive }) => {
        return isActive ? { ...activeNavLink } : {};
      }}
    >
      {nameIcon && choiceIcon[nameIcon]()}
      {link.title && <span>{link.title}</span>}
    </NavLink>
  );
};

const activeSubNavLink = {
  WebkitTapHighlightColor: 'transparent',
  color: COLORS.primaryLight,
  fontWeight: 600,
  strokeWidth: '2',
  stroke: COLORS.primaryLight
};

export const ItemSubNavLink: FC<TItemNavLink> = ({ link }) => {
  const classes = useStyles();
  const nameIcon = link?.nameIcon;
  return (
    <NavLink
      key={link.appRoute}
      className={classes.navLink}
      to={link.appRoute}
      style={({ isActive }) => {
        return isActive ? { ...activeSubNavLink } : {};
      }}
    >
      {nameIcon && choiceIcon[nameIcon]()}
      {link.title && <span>{link.title}</span>}
    </NavLink>
  );
};
