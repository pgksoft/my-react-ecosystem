import choiceProductCategoryDetail from '../../../../domain/el-if-tech-delivery/product-category-dic/const/choice-product-category-detail';
import choiceProductDetail from '../../../../domain/el-if-tech-delivery/product-dic/const/choice-product-detail';
import choiceProductInStoresDetail from '../../../../domain/el-if-tech-delivery/products-in-stores/const/choice-product-in-stores-detail';
import choiceShopDetail from '../../../../domain/el-if-tech-delivery/shops/const/choice-shop-detail';
import choiceContactDetail from '../../../../domain/genius-space-courses/react/json-server-and-axios/const/choice-contact-detail';
import TChoicePopupDetail from '../t-choice-popup-detail/t-choice-popup-detail';

const choicePopupDetail: TChoicePopupDetail = {
  ...choiceContactDetail,
  ...choiceProductCategoryDetail,
  ...choiceProductDetail,
  ...choiceShopDetail,
  ...choiceProductInStoresDetail
};

export default choicePopupDetail;
