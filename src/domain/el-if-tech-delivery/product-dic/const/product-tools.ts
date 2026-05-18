import type { TEntityToolList } from '../../../../app-infrastructure/entity-tools';
import {
  LIST_DIALOG_CREATE_ROUTES,
  LIST_DIALOG_DETAIL_ROUTES,
  LIST_DIALOG_REMOVE_ROUTES,
  LIST_ENTITIES_REFRESH_ROUTES
} from '../../../../app-infrastructure/get-parameter-popups';
import TITLES_DELIVERY_PRODUCT from './titles';

const PRODUCT_TOOLS: TEntityToolList = {};

const TEMP: TEntityToolList = {
  refresh: {
    popup: LIST_ENTITIES_REFRESH_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.refresh
  },
  create: {
    popup: LIST_DIALOG_CREATE_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.create
  },
  update: {
    popup: LIST_DIALOG_DETAIL_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.update
  },
  remove: {
    popup: LIST_DIALOG_REMOVE_ROUTES.productDic,
    title: TITLES_DELIVERY_PRODUCT.remove
  }
};
Object.assign(PRODUCT_TOOLS, TEMP);

export default PRODUCT_TOOLS;
