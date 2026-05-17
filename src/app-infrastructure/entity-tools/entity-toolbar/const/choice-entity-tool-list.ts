import PRODUCT_CATEGORY_TOOLS from '../../../../domain/el-if-tech-delivery/product-category-dic/const/product-category-tools';
import PRODUCT_TOOLS from '../../../../domain/el-if-tech-delivery/product-dic/const/product-tools';
import PRODUCTS_IN_STORES_TOOLS from '../../../../domain/el-if-tech-delivery/products-in-stores/const/products-in-stores-tools';
import SHOP_TOOLS from '../../../../domain/el-if-tech-delivery/shops/const/shop-tools';
import CONTACT_TOOLS from '../../../../domain/genius-space-courses/react/json-server-and-axios/const/contact-tools';
import createIsUnknownRecordKeyGuard from '../../../app-helpers/create-is-unknown-record-key-guard';
import TChoiceEntityToolList from '../../entity-tools-types/t-choice-entity-tool-list';

const CHOICE_ENTITY_TOOL_LIST = {
  contact: { ...CONTACT_TOOLS },
  shop: { ...SHOP_TOOLS },
  productCategoryDic: { ...PRODUCT_CATEGORY_TOOLS },
  productDic: { ...PRODUCT_TOOLS },
  shopProduct: { ...PRODUCTS_IN_STORES_TOOLS }
} as const satisfies TChoiceEntityToolList;

export const isChoiceEntityToolListKey = createIsUnknownRecordKeyGuard(
  CHOICE_ENTITY_TOOL_LIST
);

export default CHOICE_ENTITY_TOOL_LIST;
