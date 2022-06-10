import { USER_ROLE_NAMES } from '../const/user-role-names';
import { IUser } from '../entity/user';

export const getTestUser = (): IUser => {
  return {
    id: '1111-2222-3333-4444-5555',
    '@type': 'User',
    '@id': '1111-2222-3333-4444-5555',
    name: 'Admin Admin',
    enabled: true,
    userRoles: [
      {
        '@id': 'aaaa-bbbb-cccc-dddd-eeee',
        '@type': 'UserRole',
        id: 'aaaa-bbbb-cccc-dddd-eeee',
        name: USER_ROLE_NAMES.admin
      }
    ],
    createdAt: 'string'
  };
};
