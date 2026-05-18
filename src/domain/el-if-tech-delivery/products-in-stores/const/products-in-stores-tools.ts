import type { TEntityToolList } from '../../../../app-infrastructure/entity-tools';
import {
  LIST_DIALOG_CREATE_ROUTES,
  LIST_DIALOG_DETAIL_ROUTES,
  LIST_DIALOG_REMOVE_ROUTES,
  LIST_ENTITIES_REFRESH_ROUTES
} from '../../../../app-infrastructure/get-parameter-popups';
import { TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const PRODUCTS_IN_STORES_TOOLS: TEntityToolList = {};

const TEMP: TEntityToolList = {
  refresh: {
    popup: LIST_ENTITIES_REFRESH_ROUTES.shopProduct,
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.refresh
  },
  create: {
    popup: LIST_DIALOG_CREATE_ROUTES.shopProduct,
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.create
  },
  update: {
    popup: LIST_DIALOG_DETAIL_ROUTES.shopProduct,
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.update
  },
  remove: {
    popup: LIST_DIALOG_REMOVE_ROUTES.shopProduct,
    title: TITLES_EL_IF_TECH_DELIVERY_PRODUCTS_IN_STORES.remove
  }
};
Object.assign(PRODUCTS_IN_STORES_TOOLS, TEMP);

export default PRODUCTS_IN_STORES_TOOLS;
