import { ColumnType } from '../../../../_infrastructure/build-entity-table/table-types/t-column-schemas';
import { TTableSchema } from '../../../../_infrastructure/build-entity-table/table-types/t-table-schema';
import getRandomUuid from '../../../../_infrastructure/helpers/get-random-uuid';
import { keyContactDto } from '../entity/contacts';
import TITLES_CONTACT from './titles';

const contactsTableSchema: TTableSchema = [
  {
    title: TITLES_CONTACT.name,
    type: ColumnType.search,
    key: getRandomUuid(),
    dataKey: keyContactDto.name,
    isSort: true,
    valueSearch: ''
  },
  {
    title: TITLES_CONTACT.lastName,
    type: ColumnType.search,
    key: getRandomUuid(),
    dataKey: keyContactDto.lastName,
    isSort: true,
    valueSearch: ''
  },
  {
    title: TITLES_CONTACT.about,
    type: ColumnType.null,
    key: getRandomUuid(),
    dataKey: keyContactDto.about
  }
];

export default contactsTableSchema;
