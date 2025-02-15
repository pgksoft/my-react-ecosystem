import { TMember } from '../../_infrastructure/api-platform';

export interface IUserRole extends TMember {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isUserRole(obj: any): obj is IUserRole {
  return obj && typeof obj.name === 'string';
}
