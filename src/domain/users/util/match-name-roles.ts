import TEntityNameKeys from '../../_infrastructure/api-platform/app-entities/app-entities-types/t-entity-key-names';
import {
  ADMIN_USER_ROLE_NAMES,
  CREATOR_USER_ROLE_NAMES,
  READER_USER_ROLE_NAMES
} from '../const/user-role-names';
import { IUserRole } from '../entity/role';
import { IUser } from '../entity/user';

type TNotVisitorEntity = Partial<TEntityNameKeys>;

const notVisitorEntity: TNotVisitorEntity[] = [];

type TIsMatchNameRolesParam = {
  userRoles?: IUserRole[];
  userRoleNames: IUserRole['name'][];
};

export function isMatchNameRoles({
  userRoles,
  userRoleNames
}: TIsMatchNameRolesParam): boolean {
  return !!userRoles?.find((userRole) => {
    return userRoleNames.includes(userRole.name);
  });
}

export function isAdmin(userRoles: IUserRole[]): boolean {
  return isMatchNameRoles({
    userRoles,
    userRoleNames: ADMIN_USER_ROLE_NAMES
  });
}

export function isCreator(userRoles: IUserRole[]): boolean {
  return isMatchNameRoles({
    userRoles,
    userRoleNames: CREATOR_USER_ROLE_NAMES
  });
}

export function isReader(userRoles: IUserRole[]): boolean {
  return isMatchNameRoles({
    userRoles,
    userRoleNames: READER_USER_ROLE_NAMES
  });
}

export const isFullAccess = (user: IUser | null) => {
  if (user) {
    return isAdmin(user.userRoles);
  }
  return false;
};

export const isArchivist = (user: IUser | null) => {
  if (user) {
    return isCreator(user.userRoles);
  }
  return false;
};

export const isVisitor = (user: IUser | null) => {
  if (user) {
    return isReader(user.userRoles);
  }
  return false;
};

export const isNotVisitorEntity = (
  user: IUser | null,
  entityNameKey: TEntityNameKeys
) => {
  if (user) {
    return (
      isVisitor(user) &&
      notVisitorEntity.some((notVisitorEntityNameKey) => {
        return notVisitorEntityNameKey === entityNameKey;
      })
    );
  }
  return false;
};
