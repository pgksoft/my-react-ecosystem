import TChoicePopupCreate from '../../../../_infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/t-choice-popup-create';
import ContactCreate from '../model/contact-create';
import TITLES_CONTACT from './titles';

const choiceContactCrate: TChoicePopupCreate = {
  ContactCreate: {
    Component: ContactCreate,
    url: '/contacts',
    title: TITLES_CONTACT.create,
    createConfirmTitle: TITLES_CONTACT.createConfirmTitle,
    titleSuccess: TITLES_CONTACT.messageSuccessCreate
  }
};

export default choiceContactCrate;
