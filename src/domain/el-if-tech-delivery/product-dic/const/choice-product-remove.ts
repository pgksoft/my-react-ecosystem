import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-choice-popup-remove';
import ProductRemove from '../model/product-remove';
import TITLES_DELIVERY_PRODUCT from './titles';

const choiceProductRemove: TChoicePopupRemove = {
  ProductDicRemove: {
    Component: ProductRemove,
    apiUrl: apiEntityUrl.productDic,
    title: TITLES_DELIVERY_PRODUCT.remove,
    successTitle: TITLES_DELIVERY_PRODUCT.messageSuccessRemove,
    removeConfirmTitle: TITLES_DELIVERY_PRODUCT.removeConfirmTitle,
    maxWidth: 'xs',
    closeAfterSuccess: createClearCacheEntityDataInSessionStorage('productDic')
  }
};

export default choiceProductRemove;
