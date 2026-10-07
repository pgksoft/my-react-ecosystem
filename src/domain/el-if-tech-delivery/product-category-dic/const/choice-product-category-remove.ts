import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-choice-popup-remove';
import ProductCategoryRemove from '../model/product-category-remove';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';

const choiceProductCategoryRemove: TChoicePopupRemove = {
  ProductCategoryDicRemove: {
    Component: ProductCategoryRemove,
    apiUrl: apiEntityUrl.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.remove,
    successTitle: TITLES_DELIVERY_PRODUCT_CATEGORY.messageSuccessRemove,
    removeConfirmTitle: TITLES_DELIVERY_PRODUCT_CATEGORY.removeConfirmTitle,
    maxWidth: 'xs',
    closeAfterSuccess:
      createClearCacheEntityDataInSessionStorage('productCategoryDic')
  }
};

export default choiceProductCategoryRemove;
