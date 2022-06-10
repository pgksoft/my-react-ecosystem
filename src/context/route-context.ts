import { createContext } from 'react';
import { IUserRole } from '../domain/users/entity/role';
import { TITLES_OF_APP } from '../_const/titles-of-app';
import { TTypeEntityTypes } from '../_const/entities/type-entity';

export type TLink = {
  title: string;
  url: string;
  entityType?: TTypeEntityTypes;
  userRoleNames?: IUserRole['name'][];
  subMenuLinks?: TLink[];
  subLinks?: TLink[];
  disable?: boolean;
  getIcon?: () => JSX.Element;
};

type TRouteContext = {
  activeMainLink: TLink;
  activeLink: TLink;
  setActiveMainLink: (link: TLink) => void;
  setActiveLink: (link: TLink) => void;
};

export const initRouteContext: TRouteContext = {
  activeMainLink: {
    title: TITLES_OF_APP.title,
    url: ''
  },
  activeLink: { title: '', url: '' },
  setActiveMainLink: () => {},
  setActiveLink: () => {}
};

export const RouteContext = createContext<TRouteContext>(initRouteContext);
