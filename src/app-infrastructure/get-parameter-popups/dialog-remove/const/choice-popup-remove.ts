import choiceProductCategoryRemove from '../../../../domain/el-if-tech-delivery/product-category-dic/const/choice-product-category-remove';
import choiceProductRemove from '../../../../domain/el-if-tech-delivery/product-dic/const/choice-product-remove';
import choiceProductInStoresRemove from '../../../../domain/el-if-tech-delivery/products-in-stores/const/choice-product-in-stores-remove';
import choiceShopRemove from '../../../../domain/el-if-tech-delivery/shops/const/choice-shop-remove';
import ChoiceContactRemove from '../../../../domain/genius-space-courses/react/json-server-and-axios/const/choice-contact-remove';
import TChoicePopupRemove from '../t-choice-popup-remove/t-choice-popup-remove';

const choicePopupRemove: TChoicePopupRemove = {
  ...ChoiceContactRemove,
  ...choiceProductCategoryRemove,
  ...choiceProductRemove,
  ...choiceShopRemove,
  ...choiceProductInStoresRemove
};

export default choicePopupRemove;
