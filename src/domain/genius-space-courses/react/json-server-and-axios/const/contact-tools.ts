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

const TEMP = {
  refresh: {
    toolType: 'popup',
    popup: LIST_ENTITIES_REFRESH_ROUTES.contact,
    title: TITLES_CONTACT.refresh
  },
  create: {
    toolType: 'popup',
    popup: LIST_DIALOG_CREATE_ROUTES.contact,
    title: TITLES_CONTACT.create
  },
  update: {
    toolType: 'popup',
    popup: LIST_DIALOG_DETAIL_ROUTES.contact,
    title: TITLES_CONTACT.update
  },
  remove: {
    toolType: 'popup',
    popup: LIST_DIALOG_REMOVE_ROUTES.contact,
    title: TITLES_CONTACT.remove
  },
  report: {
    toolType: 'popup',
    popup: LIST_DIALOG_REPORT_ROUTES.contact,
    title: TITLES_CONTACT.report
  }
} as const satisfies TEntityToolList;
Object.assign(CONTACT_TOOLS, TEMP);

export default CONTACT_TOOLS;
