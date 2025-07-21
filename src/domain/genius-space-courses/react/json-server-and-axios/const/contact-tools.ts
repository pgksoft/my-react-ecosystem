import { TEntityToolList } from '../../../../_infrastructure/entity-tools';
import {
  LIST_REFRESH_ROUTES,
  DIALOG_CREATE_ROUTES,
  DIALOG_DETAIL_ROUTES,
  DIALOG_REMOVE_ROUTES,
  DIALOG_REPORT_ROUTES
} from '../../../../_infrastructure/get-parameter-popups';
import TITLES_CONTACT from './titles';

const CONTACT_TOOLS: TEntityToolList = {};

if (
  LIST_REFRESH_ROUTES.contact &&
  DIALOG_CREATE_ROUTES.contact &&
  DIALOG_DETAIL_ROUTES.contact &&
  DIALOG_REMOVE_ROUTES.contact &&
  DIALOG_REPORT_ROUTES.contact
) {
  const TEMP: TEntityToolList = {
    refresh: {
      popup: LIST_REFRESH_ROUTES.contact,
      title: TITLES_CONTACT.refresh
    },
    create: {
      popup: DIALOG_CREATE_ROUTES.contact,
      title: TITLES_CONTACT.create
    },
    update: {
      popup: DIALOG_DETAIL_ROUTES.contact,
      title: TITLES_CONTACT.update
    },
    remove: {
      popup: DIALOG_REMOVE_ROUTES.contact,
      title: TITLES_CONTACT.remove
    },
    report: {
      popup: DIALOG_REPORT_ROUTES.contact,
      title: TITLES_CONTACT.report
    }
  };
  Object.assign(CONTACT_TOOLS, TEMP);
}

export default CONTACT_TOOLS;
