import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupRemove from '../../../../app-infrastructure/get-parameter-popups/dialog-remove/t-choice-popup-remove/t-choice-popup-remove';
import ShopRemove from '../model/shop-remove';
import TITLES_DELIVERY_SHOPS from './titles';

const choiceShopRemove: TChoicePopupRemove = {
  ShopRemove: {
    Component: ShopRemove,
    apiUrl: apiEntityUrl.shop,
    title: TITLES_DELIVERY_SHOPS.remove,
    successTitle: TITLES_DELIVERY_SHOPS.messageSuccessRemove,
    removeConfirmTitle: TITLES_DELIVERY_SHOPS.removeConfirmTitle,
    maxWidth: 'xs',
    closeAfterSuccess: createClearCacheEntityDataInSessionStorage('shop')
  }
};

export default choiceShopRemove;
