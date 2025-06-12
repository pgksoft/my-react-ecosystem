import React, { FC, useState } from 'react';
import apiEntityUrl from '../../../../_infrastructure/api-platform/app-entities/const/api-entity-url';
import IContact from '../entity/contacts';
import ContactsViewTable from '../ui/contacts-view-table';
import LoadingDataComponent from '../../../../_infrastructure/loading-data-component/loading-data-component';
import useAppSelector from '../../../../../store/use-app-selector';
import { mutationEntitySelector } from '../../../../../redux-toolkit/mutation-entities/mutation-entities-selectors';

const ContactList: FC = () => {
  const url = `${apiEntityUrl.contact}`;
  const [contacts, setContact] = useState<IContact[] | null>(null);

  const mutation = useAppSelector(mutationEntitySelector).contact;

  return (
    <>
      <LoadingDataComponent
        inData={contacts}
        url={url}
        entityNameKey='contact'
        mutation={mutation}
        onLoaded={setContact}
        isShowDataEmptyWarning
      />
      {contacts && <ContactsViewTable contacts={contacts} />}
    </>
  );
};

export default ContactList;
