import type { TChoicePopupList } from '../../../../app-infrastructure/get-parameter-popups/dialog-list/const/choice-popup-list';
import ProductList from '../model/product-list';
import TITLES_DELIVERY_PRODUCT from './titles';

const choiceProductList: TChoicePopupList = {
  ProductDicList: {
    Component: ProductList,
    title: TITLES_DELIVERY_PRODUCT.title,
    maxWidth: 'lg'
  }
};

export default choiceProductList;
