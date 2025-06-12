import { TMember } from '../../_infrastructure/api-platform/hydra';
import { IUserRole, isUserRole } from './role';

export interface IUser extends TMember {
  name: string;
  enabled: boolean;
  userRoles: IUserRole[];
  createdAt: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isUser(obj: any): obj is IUser {
  return (
    obj &&
    typeof obj.name === 'string' &&
    typeof obj.enabled === 'boolean' &&
    (!obj.userRoles[0] || isUserRole(obj.userRoles[0])) &&
    typeof obj.createdAt === 'string'
  );
}
