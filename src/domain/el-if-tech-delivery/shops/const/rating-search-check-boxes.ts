import type { TColumnFixedNumericalRangeItems } from '../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';
import getNormalizedRatingAsStoredValue from '../helpers/get-normalized-rating.ts';

export const fixedRangesRatingSearch: TColumnFixedNumericalRangeItems = [
  {
    title: '0.0 - 1.0',
    fromNum: getNormalizedRatingAsStoredValue(0.0),
    toNum: getNormalizedRatingAsStoredValue(1.0)
  },
  {
    title: '1.0 - 2.0',
    fromNum: getNormalizedRatingAsStoredValue(1.0),
    toNum: getNormalizedRatingAsStoredValue(2.0)
  },
  {
    title: '2.0 - 3.0',
    fromNum: getNormalizedRatingAsStoredValue(2.0),
    toNum: getNormalizedRatingAsStoredValue(3.0)
  },
  {
    title: '3.0 - 4.0',
    fromNum: getNormalizedRatingAsStoredValue(3.0),
    toNum: getNormalizedRatingAsStoredValue(4.0)
  },
  {
    title: '4.0 - 5.0',
    fromNum: getNormalizedRatingAsStoredValue(4.0),
    toNum: getNormalizedRatingAsStoredValue(5.0)
  }
];
