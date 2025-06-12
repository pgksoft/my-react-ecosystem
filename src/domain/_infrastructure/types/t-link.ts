import { TIconNames } from '../../../_menu/choice-icon/types/types';
import { IUserRole } from '../../users/entity/role';
import TEntityNameKeys from '../api-platform/app-entities/app-entities-types/t-entity-key-names';

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
