import apiEntityUrl from '../../../../_infrastructure/api-platform/app-entities/const/api-entity-url';
import TChoicePopupDetail from '../../../../_infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-choice-popup-detail';
import ContactDetail from '../model/contact-detail';
import TITLES_CONTACT from './titles';

const choiceContactDetail: TChoicePopupDetail = {
  ContactDetail: {
    Component: ContactDetail,
    apiUrl: apiEntityUrl.contact,
    title: TITLES_CONTACT.update,
    titleSuccess: TITLES_CONTACT.messageSuccessUpdate,
    updateConfirmTitle: TITLES_CONTACT.updateConfirmTitle
  }
};

export default choiceContactDetail;
