import choiceProductCategoryCreate from '../../../../domain/el-if-tech-delivery/product-category-dic/const/choice-product-category-create';
import choiceProductCreate from '../../../../domain/el-if-tech-delivery/product-dic/const/choice-product-create';
import choiceProductsInStoresCreate from '../../../../domain/el-if-tech-delivery/products-in-stores/const/choice-products-in-stores-create';
import choiceShopCreate from '../../../../domain/el-if-tech-delivery/shops/const/choice-shop-create';
import choiceContactCreate from '../../../../domain/genius-space-courses/react/json-server-and-axios/const/choice-contact-create';
import TChoicePopupCreate from '../t-choice-popup-create/t-choice-popup-create';

const choicePopupCreate: TChoicePopupCreate = {
  ...choiceContactCreate,
  ...choiceProductCategoryCreate,
  ...choiceProductCreate,
  ...choiceShopCreate,
  ...choiceProductsInStoresCreate
};

export default choicePopupCreate;
