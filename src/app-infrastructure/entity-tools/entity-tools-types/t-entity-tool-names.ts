import { getArrayAsStringConst } from '../../app-helpers/get-array-as-string-const';
import type TypeGuard from '../../app-types/type-guard';

const popupEntityToolName = getArrayAsStringConst(
  'refresh',
  'create',
  'update',
  'remove',
  'report',
  'filterAllOff',
  'filterSettingsOff',
  'sortAllOff'
);

type TPopupEntityToolName = (typeof popupEntityToolName)[number];

const modalCommandEntityToolName = getArrayAsStringConst('reloadImage');

type TModalCommandEntityToolName = (typeof modalCommandEntityToolName)[number];

type TEntityToolName = TPopupEntityToolName | TModalCommandEntityToolName;

export default TEntityToolName;

export type { TPopupEntityToolName, TModalCommandEntityToolName };

export const isEntityToolName: TypeGuard<TEntityToolName> = (
  value: unknown
): value is TEntityToolName => {
  return (
    typeof value === 'string' &&
    (popupEntityToolName.includes(value as TPopupEntityToolName) ||
      modalCommandEntityToolName.includes(value as TModalCommandEntityToolName))
  );
};
