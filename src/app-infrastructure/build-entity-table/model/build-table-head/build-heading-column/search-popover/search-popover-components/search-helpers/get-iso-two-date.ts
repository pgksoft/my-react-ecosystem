import type { TGetParameter } from '../../../../../../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';

export const getIsoTwoDate = (
  fromDate: TGetParameter,
  toDate: TGetParameter
): TGetParameter => {
  if (!fromDate && !toDate) return '';
  if (!!fromDate && !toDate) return `${fromDate}-`;
  if (!fromDate && !!toDate) return `-${toDate}`;
  return `${fromDate}-${toDate}`;
};
