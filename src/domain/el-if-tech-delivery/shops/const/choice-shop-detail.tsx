import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupDetail from '../../../../app-infrastructure/get-parameter-popups/dialog-detail/t-choice-popup-detail/t-choice-popup-detail';
import { ShopDetail } from '../model/shop-detail';
import TITLES_DELIVERY_SHOPS from './titles';

const choiceShopDetail: TChoicePopupDetail = {
  ShopDetail: {
    Component: ShopDetail,
    apiUrl: apiEntityUrl.shop,
    title: TITLES_DELIVERY_SHOPS.update,
    titleSuccess: TITLES_DELIVERY_SHOPS.messageSuccessUpdate,
    updateConfirmTitle: TITLES_DELIVERY_SHOPS.updateConfirmTitle,
    closeSuccess: createClearCacheEntityDataInSessionStorage('shop')
  }
};

export default choiceShopDetail;
