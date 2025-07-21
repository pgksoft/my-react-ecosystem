/* eslint-disable @typescript-eslint/no-explicit-any */
import { isPrimitiveValueType, TFieldValue } from '../table-types/t-data-table';
import { IGetContent } from '../table-types/t-table-schema';

const findValuesInObject = (
  keys: string[],
  obj: any,
  data: any,
  getContent?: IGetContent
): TFieldValue => {
  let outValue: TFieldValue = [];
  Object.entries(obj).forEach(([objKey, value]) => {
    if (keys[0] === objKey) {
      // primitive value
      if (isPrimitiveValueType(value)) {
        if (getContent) {
          outValue.push(getContent(value, data));
        } else {
          outValue.push(value);
        }
      }
      // array value
      else if (Array.isArray(value)) {
        if (
          value.every((item) => {
            return isPrimitiveValueType(item);
          })
        ) {
          outValue.push(value.join(', '));
        } else {
          const newKeys = keys.slice(1);
          const arr = obj[objKey];
          outValue = outValue.concat(
            ...arr.map((newObj: any) => {
              return findValuesInObject(newKeys, newObj, data, getContent);
            })
          );
        }
      }
      // object value
      else if (value instanceof Object) {
        const newKeys = keys.slice(1);
        outValue = findValuesInObject(newKeys, value, data, getContent);
      }
    }
  });
  return outValue;
};

export default findValuesInObject;
