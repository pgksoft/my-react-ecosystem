import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupCreate from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/t-choice-popup-create';
import ProductCreate from '../model/product-create';
import TITLES_DELIVERY_PRODUCT from './titles';

const choiceProductCreate: TChoicePopupCreate = {
  ProductDicCreate: {
    Component: ProductCreate,
    url: apiEntityUrl.productDic,
    title: TITLES_DELIVERY_PRODUCT.create,
    createConfirmTitle: TITLES_DELIVERY_PRODUCT.createConfirmTitle,
    titleSuccess: TITLES_DELIVERY_PRODUCT.messageSuccessCreate,
    closeSuccess: createClearCacheEntityDataInSessionStorage('productDic')
  }
};

export default choiceProductCreate;
