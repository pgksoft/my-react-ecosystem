import { TContactDto } from '../entity/contacts';

const getContactBriefDescription = (contact: TContactDto): string => {
  return `${contact.name} ${contact.lastName}`;
};

export default getContactBriefDescription;
