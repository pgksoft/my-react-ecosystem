import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupCreate from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/t-choice-popup-create';
import ProductCategoryCreate from '../model/product-category-create';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';

const choiceProductCategoryCreate: TChoicePopupCreate = {
  ProductCategoryDicCreate: {
    Component: ProductCategoryCreate,
    url: apiEntityUrl.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.create,
    createConfirmTitle: TITLES_DELIVERY_PRODUCT_CATEGORY.createConfirmTitle,
    titleSuccess: TITLES_DELIVERY_PRODUCT_CATEGORY.messageSuccessCreate,
    closeSuccess:
      createClearCacheEntityDataInSessionStorage('productCategoryDic')
  }
};

export default choiceProductCategoryCreate;
