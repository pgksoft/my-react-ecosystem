import { IUserRole } from '../../domain/users/entity/role';
import TEntityNameKeys from '../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TIconNames } from '../app-menu/choice-icon/types/types';

type TLink = {
  title?: string;
  appRoute: string;
  entityNameKey?: TEntityNameKeys;
  userRoleNames?: IUserRole['name'][];
  subMenuLinks?: TLink[];
  subLinks?: TLink[];
  disable?: boolean;
  nameIcon?: TIconNames;
  isHaveDefaultGoBackIconButton?: boolean;
};

export default TLink;
