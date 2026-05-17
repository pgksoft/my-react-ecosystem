import { getArrayAsStringConst } from '../../../app-helpers/get-array-as-string-const';

export const entityNameKeys = getArrayAsStringConst(
  'simpleNewsletterSignUp',
  'contact',
  'todo',
  'shop',
  'productCategoryDic',
  'productDic',
  'shopProduct'
);

type TEntityNameKeys = (typeof entityNameKeys)[number];

export default TEntityNameKeys;
