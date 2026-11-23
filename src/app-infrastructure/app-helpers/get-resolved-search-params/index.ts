import type { TGetParameters } from '../../../_hooks/get-parameter.hooks/get-parameters-type/t-get-parameters';
import type TUnknownRecord from '../../app-types/t-unknown-record';
import getCheckBoxSearchParamValue from '../../build-entity-table/model/build-table-head/build-heading-column/search-popover/search-popover-components/search-helpers/get-checkbox-search-param-value';
import {
  isTColumnCalendar,
  isTColumnCheckboxSearch,
  isTColumnFixedNumericalRanges,
  isTColumnStingSearch
} from '../../build-entity-table/table-types/t-column-schemas';

const getResolvedSearchParams = (
  searchParams: TUnknownRecord
): TGetParameters => {
  if (Object.keys(searchParams).length === 0) return {};

  const resolvedSearchParams: TGetParameters = {};

  Object.entries(searchParams).forEach(([dataKey, value]) => {
    if (isTColumnStingSearch(value)) {
      resolvedSearchParams[dataKey] = `/${value.valueSearch}/i`;
    } else if (isTColumnCheckboxSearch(value)) {
      resolvedSearchParams[`${dataKey}[]`] = getCheckBoxSearchParamValue(
        value.checkboxes
      );
    } else if (isTColumnFixedNumericalRanges(value)) {
      const { fromNum, toNum } = value.ranges[0];
      resolvedSearchParams[`${dataKey}[gte]`] = fromNum;
      resolvedSearchParams[`${dataKey}[lte]`] = toNum;
    } else if (isTColumnCalendar(value)) {
      const { fromDate, toDate } = value.dateSearch;
      if (fromDate) {
        resolvedSearchParams[`${dataKey}[gte]`] = fromDate;
      }
      if (toDate) {
        resolvedSearchParams[`${dataKey}[lte]`] = toDate;
      }
    }
  });

  return resolvedSearchParams;
};

export default getResolvedSearchParams;
