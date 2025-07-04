import React, { FC, useState } from 'react';
import IContact from '../entity/contacts';
import ContactsViewTable from '../ui/contacts-view-table';
import LoadingDataComponent from '../../../../_infrastructure/loading-data-component/loading-data-component';
import useAppSelector from '../../../../../store/use-app-selector';
import { mutationEntitySelector } from '../../../../../redux-toolkit/mutation-entities/mutation-entities-selectors';
import BuildEntityTable from '../../../../_infrastructure/build-entity-table/model/build-entity-table';
import contactsTableSchema from '../const/contacts-table-schema';

const ContactList: FC = () => {
  // const [contacts, setContact] = useState<IContact[] | null>(null);

  // const mutation = useAppSelector(mutationEntitySelector).contact;

  return (
    // <>
    //   <LoadingDataComponent
    //     inData={contacts}
    //     entityNameKey='contact'
    //     mutation={mutation}
    //     onLoaded={setContact}
    //     isShowDataEmptyWarning
    //   />
    //   {contacts && <ContactsViewTable contacts={contacts} />}
    // </>
    <BuildEntityTable
      entityNameKey='contact'
      tableSchema={contactsTableSchema}
    />
  );
};

export default ContactList;
