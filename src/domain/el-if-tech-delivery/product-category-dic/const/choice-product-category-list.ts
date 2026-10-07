import type { TChoicePopupList } from '../../../../app-infrastructure/get-parameter-popups/dialog-list/const/choice-popup-list';
import ProductCategoryList from '../model/product-category-list';
import TITLES_DELIVERY_PRODUCT_CATEGORY from './titles';

const choiceProductCategoryList: TChoicePopupList = {
  ProductCategoryDicList: {
    Component: ProductCategoryList,
    title: TITLES_DELIVERY_PRODUCT_CATEGORY.title,
    maxWidth: 'md'
  }
};

export default choiceProductCategoryList;
