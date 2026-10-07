import type { TChoicePopupList } from '../../../../app-infrastructure/get-parameter-popups/dialog-list/const/choice-popup-list';
import ShopList from '../model/shop-list';
import TITLES_DELIVERY_SHOPS from './titles';

const choiceShopList: TChoicePopupList = {
  ShopList: {
    Component: ShopList,
    title: TITLES_DELIVERY_SHOPS.title,
    maxWidth: 'lg'
  }
};

export default choiceShopList;
