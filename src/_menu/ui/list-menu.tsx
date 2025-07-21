import React, { FC } from 'react';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IUserRole } from '../../domain/users/entity/role';
import { LINKS_AUTH_USER } from '../../_route/links';
import { isLinkName } from '../../_route/route-types/helpers/is-link-name';
import { getGroupMenuKeys } from '../helpers/get-group-menu-keys';
import getRandomUuid from '../../domain/_infrastructure/helpers/get-random-uuid';
import { ItemNavLink, ItemSubNavLink } from './item-nav-link';

export type TSubMenuOpens = Record<string, boolean>;

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
            <ListItem key={LINKS_AUTH_USER[key].appRoute}>
              <ItemNavLink link={LINKS_AUTH_USER[key]} />
            </ListItem>
          );
        }
        return (
          <div key={LINKS_AUTH_USER[key].appRoute}>
            <ListItem key={getRandomUuid()}>
              <ItemNavLink link={LINKS_AUTH_USER[key]} />
              <IconButton
                sx={{ padding: '4px' }}
                onClick={() => {
                  subMenuToggleOpens(LINKS_AUTH_USER[key].appRoute);
                }}
              >
                {subMenuOpens[LINKS_AUTH_USER[key].appRoute] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </IconButton>
            </ListItem>
            <Collapse
              in={subMenuOpens[LINKS_AUTH_USER[key].appRoute]}
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
                        <ListItem key={link.appRoute} disablePadding>
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
