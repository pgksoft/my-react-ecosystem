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
import TITLES_DELIVERY_PRODUCT from './titles';

const PRODUCT_TOOLS: TEntityToolList = {};

const TEMP = {
  refresh: {
    toolType: 'popup',
    popup: LIST_ENTITIES_REFRESH_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.refresh
  },
  create: {
    toolType: 'popup',
    popup: LIST_DIALOG_CREATE_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.create
  },
  update: {
    toolType: 'popup',
    popup: LIST_DIALOG_DETAIL_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.update
  },
  remove: {
    toolType: 'popup',
    popup: LIST_DIALOG_REMOVE_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.remove
  },
  filterAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_FILTER_ALL_OFF_ROUTES.productDic,
    title: TITLES_OF_APP.filterAllOff
  },
  sortAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_SORT_ALL_OFF_ROUTES.productDic,
    title: TITLES_OF_APP.sortAllOff
  }
} as const satisfies TEntityToolList;
Object.assign(PRODUCT_TOOLS, TEMP);

export default PRODUCT_TOOLS;
