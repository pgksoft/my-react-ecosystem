import React, { FC } from 'react';
import BuildEntityTable from '../../../../_infrastructure/build-entity-table/model/build-entity-table';
import contactsTableSchema from '../const/contacts-table-schema';

const ContactList: FC = () => {
  return (
    <BuildEntityTable
      entityNameKey='contact'
      tableSchema={contactsTableSchema}
    />
  );
};

export default ContactList;
