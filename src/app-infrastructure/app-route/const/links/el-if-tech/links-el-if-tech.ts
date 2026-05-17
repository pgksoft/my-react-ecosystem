import type TLink from '../../../../app-types/t-link';
import { TITLES_EL_IF_TECH_DELIVERY } from '../../../../../domain/el-if-tech-delivery/const/titles';
import type { TAuthUserElIfTechDelivery } from '../../../route-types/route-types';

export const elIfTechDeliveryProductsInStores: TLink = {
  title: TITLES_EL_IF_TECH_DELIVERY.titleShopProducts,
  appRoute: '/el-if-tech-delivery/products-in-stores',
  entityNameKey: 'shopProduct'
};

export const elIfTechDeliveryShops: TLink = {
  title: TITLES_EL_IF_TECH_DELIVERY.titleShops,
  appRoute: '/el-if-tech-delivery/shops',
  entityNameKey: 'shop'
};

export const elIfTechDeliveryProductCategoryDic: TLink = {
  title: TITLES_EL_IF_TECH_DELIVERY.titleProductCategoryDic,
  appRoute: '/el-if-tech-delivery/product-category-dic',
  entityNameKey: 'productCategoryDic'
};

export const elIfTechDeliveryProductDic: TLink = {
  title: TITLES_EL_IF_TECH_DELIVERY.titleProductDic,
  appRoute: '/el-if-tech-delivery/product-dic',
  entityNameKey: 'productDic'
};

export const elIfTechDelivery: TLink = {
  title: 'ELIFTECH Delivery App',
  appRoute: '/el-if-tech-delivery',
  nameIcon: 'elIfTech',
  subLinks: [
    elIfTechDeliveryProductsInStores,
    elIfTechDeliveryShops,
    elIfTechDeliveryProductCategoryDic,
    elIfTechDeliveryProductDic
  ]
};

export const LINKS_AUTH_USER_ELIFTECH_DELIVERY: TAuthUserElIfTechDelivery = {
  elIfTechDelivery,
  elIfTechDeliveryProductsInStores,
  elIfTechDeliveryShops,
  elIfTechDeliveryProductCategoryDic,
  elIfTechDeliveryProductDic
};
