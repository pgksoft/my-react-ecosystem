import { TITLES_OF_APP } from '../../../../app-infrastructure/app-const/titles-of-app';
import type { TEntityToolList } from '../../../../app-infrastructure/entity-tools';
import {
  LIST_DIALOG_CREATE_ROUTES,
  LIST_DIALOG_DETAIL_ROUTES,
  LIST_DIALOG_REMOVE_ROUTES,
  LIST_ENTITIES_FILTER_ALL_OFF_ROUTES,
  LIST_ENTITIES_REFRESH_ROUTES,
  LIST_ENTITIES_SORT_ALL_OFF_ROUTES
} from '../../../../app-infrastructure/get-parameter-popups';
import TITLES_DELIVERY_SHOPS from './titles';

const SHOP_TOOLS: TEntityToolList = {};

const TEMP = {
  refresh: {
    toolType: 'popup',
    popup: LIST_ENTITIES_REFRESH_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.refresh
  },
  create: {
    toolType: 'popup',
    popup: LIST_DIALOG_CREATE_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.create
  },
  update: {
    toolType: 'popup',
    popup: LIST_DIALOG_DETAIL_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.update
  },
  remove: {
    toolType: 'popup',
    popup: LIST_DIALOG_REMOVE_ROUTES.shop,
    title: TITLES_DELIVERY_SHOPS.remove
  },
  filterAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_FILTER_ALL_OFF_ROUTES.shop,
    title: TITLES_OF_APP.filterAllOff
  },
  sortAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_SORT_ALL_OFF_ROUTES.shop,
    title: TITLES_OF_APP.sortAllOff
  }
} as const satisfies TEntityToolList;
Object.assign(SHOP_TOOLS, TEMP);

export default SHOP_TOOLS;
