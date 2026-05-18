import type { TEntityToolList } from '../../../../app-infrastructure/entity-tools';
import {
  LIST_DIALOG_CREATE_ROUTES,
  LIST_DIALOG_DETAIL_ROUTES,
  LIST_DIALOG_REMOVE_ROUTES,
  LIST_ENTITIES_REFRESH_ROUTES
} from '../../../../app-infrastructure/get-parameter-popups';
import TITLES_DELIVERY_SHOPS from './titles';

const SHOP_TOOLS: TEntityToolList = {};

const TEMP: TEntityToolList = {
  refresh: {
    popup: LIST_ENTITIES_REFRESH_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.refresh
  },
  create: {
    popup: LIST_DIALOG_CREATE_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.create
  },
  update: {
    popup: LIST_DIALOG_DETAIL_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.update
  },
  remove: {
    popup: LIST_DIALOG_REMOVE_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.remove
  }
};
Object.assign(SHOP_TOOLS, TEMP);

export default SHOP_TOOLS;
