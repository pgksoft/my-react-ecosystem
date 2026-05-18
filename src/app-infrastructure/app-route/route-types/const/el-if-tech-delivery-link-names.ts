import { getArrayAsStringConst } from '../../../app-helpers/get-array-as-string-const';

export const elIfTechDeliveryLinkNames = getArrayAsStringConst(
  'elIfTechDelivery',
  'elIfTechDeliveryShops',
  'elIfTechDeliveryProductCategoryDic',
  'elIfTechDeliveryProductDic',
  'elIfTechDeliveryProductsInStores'
);

export type TElIfTechDeliveryLinkNames =
  (typeof elIfTechDeliveryLinkNames)[number];
