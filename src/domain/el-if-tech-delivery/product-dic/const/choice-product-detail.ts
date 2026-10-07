import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupDetail from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-choice-popup-detail';
import ProductDetail from '../model/product-detail';
import TITLES_DELIVERY_PRODUCT from './titles';

const choiceProductDetail: TChoicePopupDetail = {
  ProductDicDetail: {
    Component: ProductDetail,
    apiUrl: apiEntityUrl.productDic,
    title: TITLES_DELIVERY_PRODUCT.update,
    titleSuccess: TITLES_DELIVERY_PRODUCT.messageSuccessUpdate,
    updateConfirmTitle: TITLES_DELIVERY_PRODUCT.updateConfirmTitle,
    closeSuccess:
      createClearCacheEntityDataInSessionStorage('productCategoryDic')
  }
};

export default choiceProductDetail;
