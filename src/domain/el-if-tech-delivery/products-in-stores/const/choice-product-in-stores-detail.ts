import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import type TChoicePopupDetail from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-choice-popup-detail';
import ProductInStoresDetail from '../model/product-in-stores-detail';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const choiceProductInStoresDetail: TChoicePopupDetail = {
  ShopProductDetail: {
    Component: ProductInStoresDetail,
    apiUrl: apiEntityUrl.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.update,
    titleSuccess: TITLES_DELIVERY_PRODUCTS_IN_STORES.messageSuccessUpdate,
    updateConfirmTitle: TITLES_DELIVERY_PRODUCTS_IN_STORES.updateConfirmTitle
  }
};

export default choiceProductInStoresDetail;
