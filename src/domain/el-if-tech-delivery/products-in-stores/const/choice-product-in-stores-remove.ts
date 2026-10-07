import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import type TChoicePopupRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-choice-popup-remove';
import ProductInStoresRemove from '../model/product-in-stores-remove';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const choiceProductInStoresRemove: TChoicePopupRemove = {
  ShopProductRemove: {
    Component: ProductInStoresRemove,
    apiUrl: apiEntityUrl.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.remove,
    successTitle: TITLES_DELIVERY_PRODUCTS_IN_STORES.messageSuccessRemove,
    removeConfirmTitle: TITLES_DELIVERY_PRODUCTS_IN_STORES.removeConfirmTitle,
    maxWidth: 'sm'
  }
};

export default choiceProductInStoresRemove;
