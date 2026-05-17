import { TEntityToolList } from '../../../../../app-infrastructure/entity-tools';
import {
  LIST_ENTITIES_REFRESH_ROUTES,
  LIST_DIALOG_CREATE_ROUTES,
  LIST_DIALOG_DETAIL_ROUTES,
  LIST_DIALOG_REMOVE_ROUTES,
  LIST_DIALOG_REPORT_ROUTES
} from '../../../../../app-infrastructure/get-parameter-popups';
import TITLES_CONTACT from './titles';

const CONTACT_TOOLS: TEntityToolList = {};

const TEMP: TEntityToolList = {
  refresh: {
    popup: LIST_ENTITIES_REFRESH_ROUTES.contact,
    title: TITLES_CONTACT.refresh
  },
  create: {
    popup: LIST_DIALOG_CREATE_ROUTES.contact,
    title: TITLES_CONTACT.create
  },
  update: {
    popup: LIST_DIALOG_DETAIL_ROUTES.contact,
    title: TITLES_CONTACT.update
  },
  remove: {
    popup: LIST_DIALOG_REMOVE_ROUTES.contact,
    title: TITLES_CONTACT.remove
  },
  report: {
    popup: LIST_DIALOG_REPORT_ROUTES.contact,
    title: TITLES_CONTACT.report
  }
};
Object.assign(CONTACT_TOOLS, TEMP);

export default CONTACT_TOOLS;
