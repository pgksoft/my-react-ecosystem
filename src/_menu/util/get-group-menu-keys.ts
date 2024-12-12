import { IUserRole } from '../../domain/users/entity/role';
import { isMatchNameRoles } from '../../domain/users/util/match-name-roles';
import { LINKS_AUTH_USER, isTypeLinkTypes } from '../../_route/links';

export const getGroupMenuKeys = (userRoles?: IUserRole[]): string[] => {
  return Object.keys(LINKS_AUTH_USER).filter((key) => {
    if (!isTypeLinkTypes(key)) return false;
    const { userRoleNames } = LINKS_AUTH_USER[key];
    if ((LINKS_AUTH_USER[key].url.match(/\//g) || []).length <= 1) {
      return userRoleNames
        ? isMatchNameRoles({ userRoles, userRoleNames })
        : true;
    }
    return false;
  });
};
