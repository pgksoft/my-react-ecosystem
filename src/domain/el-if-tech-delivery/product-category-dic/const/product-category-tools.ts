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
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';

const PRODUCT_CATEGORY_TOOLS: TEntityToolList = {};

const TEMP = {
  refresh: {
    toolType: 'popup',
    popup: LIST_ENTITIES_REFRESH_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.refresh
  },
  create: {
    toolType: 'popup',
    popup: LIST_DIALOG_CREATE_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.create
  },
  update: {
    toolType: 'popup',
    popup: LIST_DIALOG_DETAIL_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.update
  },
  remove: {
    toolType: 'popup',
    popup: LIST_DIALOG_REMOVE_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.remove
  },
  filterAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_FILTER_ALL_OFF_ROUTES.productCategoryDic,
    title: TITLES_OF_APP.filterAllOff
  },
  sortAllOff: {
    toolType: 'popup',
    popup: LIST_ENTITIES_SORT_ALL_OFF_ROUTES.productCategoryDic,
    title: TITLES_OF_APP.sortAllOff
  }
} as const satisfies TEntityToolList;
Object.assign(PRODUCT_CATEGORY_TOOLS, TEMP);

export default PRODUCT_CATEGORY_TOOLS;
