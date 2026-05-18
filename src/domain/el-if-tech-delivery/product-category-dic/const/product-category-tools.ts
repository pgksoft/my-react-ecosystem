import type { TEntityToolList } from '../../../../app-infrastructure/entity-tools';
import {
  LIST_DIALOG_CREATE_ROUTES,
  LIST_DIALOG_DETAIL_ROUTES,
  LIST_DIALOG_REMOVE_ROUTES,
  LIST_ENTITIES_REFRESH_ROUTES
} from '../../../../app-infrastructure/get-parameter-popups';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';

const PRODUCT_CATEGORY_TOOLS: TEntityToolList = {};

const TEMP: TEntityToolList = {
  refresh: {
    popup: LIST_ENTITIES_REFRESH_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.refresh
  },
  create: {
    popup: LIST_DIALOG_CREATE_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.create
  },
  update: {
    popup: LIST_DIALOG_DETAIL_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.update
  },
  remove: {
    popup: LIST_DIALOG_REMOVE_ROUTES.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.remove
  }
};
Object.assign(PRODUCT_CATEGORY_TOOLS, TEMP);

export default PRODUCT_CATEGORY_TOOLS;
