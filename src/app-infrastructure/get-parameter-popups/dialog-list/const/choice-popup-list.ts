import choiceProductCategoryList from '../../../../domain/el-if-tech-delivery/product-category-dic/const/choice-product-category-list';
import choiceProductList from '../../../../domain/el-if-tech-delivery/product-dic/const/choice-product-list';
import choiceShopList from '../../../../domain/el-if-tech-delivery/shops/const/choice-shop-list';
import TPopupList from '../t-choice-popup-list/t-popup-list';
import type {
  TPopupFilteredListRoute,
  TPopupListRoute
} from './popup-list-routes';

export type TChoicePopupList = Partial<
  Record<TPopupListRoute | TPopupFilteredListRoute, TPopupList>
>;

const choicePopupList: TChoicePopupList = {
  ...choiceProductCategoryList,
  ...choiceProductList,
  ...choiceShopList
};

export default choicePopupList;
