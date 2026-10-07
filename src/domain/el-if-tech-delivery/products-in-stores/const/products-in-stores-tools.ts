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
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const PRODUCTS_IN_STORES_TOOLS: TEntityToolList = {};

const TEMP = {
  refresh: {
    toolType: 'popup',
    popup: LIST_ENTITIES_REFRESH_ROUTES.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.refresh
  },
  create: {
    toolType: 'popup',
    popup: LIST_DIALOG_CREATE_ROUTES.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.create
  },
  update: {
    toolType: 'popup',
    popup: LIST_DIALOG_DETAIL_ROUTES.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.update
  },
  remove: {
    toolType: 'popup',
    popup: LIST_DIALOG_REMOVE_ROUTES.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.remove
  },
  filterAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_FILTER_ALL_OFF_ROUTES.shopProduct,
    title: TITLES_OF_APP.filterAllOff
  },
  sortAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_SORT_ALL_OFF_ROUTES.shopProduct,
    title: TITLES_OF_APP.sortAllOff
  }
} as const satisfies TEntityToolList;

Object.assign(PRODUCTS_IN_STORES_TOOLS, TEMP);

export default PRODUCTS_IN_STORES_TOOLS;
