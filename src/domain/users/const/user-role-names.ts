export const USER_ROLE_NAMES = {
  admin: 'Адміністратор',
  allowReading: 'Гість',
  allowWriting: 'Працівник'
};

export const ADMIN_USER_ROLE_NAMES = [USER_ROLE_NAMES.admin];

export const CREATOR_USER_ROLE_NAMES = [USER_ROLE_NAMES.allowWriting];

export const READER_USER_ROLE_NAMES = [USER_ROLE_NAMES.allowReading];
