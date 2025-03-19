import { TIconNames } from '../../../_menu/choice-icon/types/types';
import { IUserRole } from '../../users/entity/role';
import { TTypeEntityTypes } from './type-entity';

type TLink = {
  title?: string;
  url: string;
  entityType?: TTypeEntityTypes;
  userRoleNames?: IUserRole['name'][];
  subMenuLinks?: TLink[];
  subLinks?: TLink[];
  disable?: boolean;
  nameIcon?: TIconNames;
  isHaveDefaultGoBackIconButton?: boolean;
};

export default TLink;
