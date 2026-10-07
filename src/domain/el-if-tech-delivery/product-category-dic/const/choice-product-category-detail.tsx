import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupDetail from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-choice-popup-detail';
import ProductCategoryDetail from '../model/product-category-detail';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';

const choiceProductCategoryDetail: TChoicePopupDetail = {
  ProductCategoryDicDetail: {
    Component: ProductCategoryDetail,
    apiUrl: apiEntityUrl.productCategoryDic,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.update,
    titleSuccess: TITLES_DELIVERY_PRODUCT_CATEGORY.messageSuccessUpdate,
    updateConfirmTitle: TITLES_DELIVERY_PRODUCT_CATEGORY.updateConfirmTitle,
    closeSuccess:
      createClearCacheEntityDataInSessionStorage('productCategoryDic')
  }
};

export default choiceProductCategoryDetail;
