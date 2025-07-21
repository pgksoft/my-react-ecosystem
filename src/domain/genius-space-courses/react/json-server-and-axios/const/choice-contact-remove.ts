import apiEntityUrl from '../../../../_infrastructure/api-platform/app-entities/const/api-entity-url';
import TChoicePopupRemove from '../../../../_infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-choice-popup-remove';
import ContactRemove from '../model/contact-remove';
import TITLES_CONTACT from './titles';

const ChoiceContactRemove: TChoicePopupRemove = {
  ContactRemove: {
    Component: ContactRemove,
    apiUrl: apiEntityUrl.contact,
    title: TITLES_CONTACT.remove,
    successTitle: TITLES_CONTACT.messageSuccessRemove,
    removeConfirmTitle: TITLES_CONTACT.removeConfirmTitle,
    maxWidth: 'xs'
  }
};

export default ChoiceContactRemove;
