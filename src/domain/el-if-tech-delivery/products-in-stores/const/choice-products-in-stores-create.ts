import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import type TChoicePopupCreate from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/t-choice-popup-create';
import ProductsInStoresCreate from '../model/products-in-stores-create';
import { TITLES_DELIVERY_PRODUCTS_IN_STORES } from './titles';

const choiceProductsInStoresCreate: TChoicePopupCreate = {
  ShopProductCreate: {
    Component: ProductsInStoresCreate,
    url: apiEntityUrl.shopProduct,
    title: TITLES_DELIVERY_PRODUCTS_IN_STORES.create,
    createConfirmTitle: TITLES_DELIVERY_PRODUCTS_IN_STORES.createConfirmTitle,
    titleSuccess: TITLES_DELIVERY_PRODUCTS_IN_STORES.messageSuccessCreate
  }
};

export default choiceProductsInStoresCreate;
