import { APP_ENTITIES } from '../../../../_infrastructure/api-platform';
import { TEntityToolList } from '../../../../_infrastructure/entity-tools';
import {
  DIALOG_CREATE_ROUTES,
  DIALOG_REMOVE_ROUTES
} from '../../../../_infrastructure/get-parameter-popups';
import LIST_REFRESH_ROUTES from '../../../../_infrastructure/get-parameter-popups/entity-list-refresh/const/list-refresh-routes';
import TITLES_CONTACT from './titles';

const CONTACT_TOOLS: TEntityToolList = {};

if (
  DIALOG_CREATE_ROUTES.contact &&
  DIALOG_REMOVE_ROUTES.contact &&
  LIST_REFRESH_ROUTES.contact
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
      popup: APP_ENTITIES.contact,
      title: TITLES_CONTACT.update
    },
    remove: {
      popup: DIALOG_REMOVE_ROUTES.contact,
      title: TITLES_CONTACT.remove
    }
  };
  Object.assign(CONTACT_TOOLS, TEMP);
}

export default CONTACT_TOOLS;
