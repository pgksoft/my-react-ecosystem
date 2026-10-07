import { TTableSchema } from '../../../../../app-infrastructure/build-entity-table/table-types/t-table-schema';
import getRandomUuid from '../../../../../app-infrastructure/app-helpers/get-random-uuid';
import { type TKeyContact } from '../entity/contacts';
import TITLES_CONTACT from './titles';

const contactsTableSchema = [
  { title: '', type: 'null', key: getRandomUuid(), dataKey: 'id' },
  {
    title: TITLES_CONTACT.name,
    type: 'search',
    key: getRandomUuid(),
    dataKey: 'name',
    isSort: true,
    valueSearch: '',
    sx: { width: '15%' }
  },
  {
    title: TITLES_CONTACT.lastName,
    type: 'search',
    key: getRandomUuid(),
    dataKey: 'lastName',
    isSort: true,
    valueSearch: '',
    sx: { width: '20%' }
  },
  {
    title: TITLES_CONTACT.about,
    type: 'null',
    key: getRandomUuid(),
    dataKey: 'about'
  }
] as const satisfies TTableSchema<TKeyContact>;

export default contactsTableSchema;
