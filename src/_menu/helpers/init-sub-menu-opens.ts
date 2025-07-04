import { LINKS_AUTH_USER } from '../../_route/links';
import { isLinkName } from '../../_route/route-types/helpers/is-link-name';
import { TSubMenuOpens } from '../ui/list-menu';
import { getGroupMenuKeys } from './get-group-menu-keys';

const initSubMenuOpens = (): TSubMenuOpens => {
  const subMenuOpens: TSubMenuOpens = {};
  getGroupMenuKeys().forEach((key) => {
    if (isLinkName(key)) subMenuOpens[LINKS_AUTH_USER[key].appRoute] = true;
  });
  return subMenuOpens;
};

export default initSubMenuOpens;
