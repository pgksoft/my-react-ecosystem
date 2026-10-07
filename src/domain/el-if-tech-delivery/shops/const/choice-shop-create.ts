import apiEntityUrl from '../../../../app-infrastructure/api-platform/app-entities/const/api-entity-url';
import createClearCacheEntityDataInSessionStorage from '../../../../app-infrastructure/app-helpers/create-clear-cache-entity-data-in-session-storage';
import type TChoicePopupCreate from '../../../../app-infrastructure/get-parameter-popups/dialog-create/t-choice-popup-create/t-choice-popup-create';
import ShopCreate from '../model/shop-create';
import TITLES_DELIVERY_SHOPS from './titles';

const choiceShopCreate: TChoicePopupCreate = {
  ShopCreate: {
    Component: ShopCreate,
    url: apiEntityUrl.shop,
    title: TITLES_DELIVERY_SHOPS.create,
    createConfirmTitle: TITLES_DELIVERY_SHOPS.createConfirmTitle,
    titleSuccess: TITLES_DELIVERY_SHOPS.messageSuccessCreate,
    closeSuccess: createClearCacheEntityDataInSessionStorage('shop')
  }
};

export default choiceShopCreate;
