import type { TColumnCheckboxItems } from '../../../../app-infrastructure/build-entity-table/table-types/t-column-schemas';

const ratingSearchCheckBoxes: TColumnCheckboxItems = [
  { key: '00-10', title: '0.0-1.0', value: false },
  { key: '10-20', title: '1.0-2.0', value: false },
  { key: '20-30', title: '2.0-3.0', value: false },
  { key: '30-40', title: '3.0-4.0', value: false },
  { key: '40-50', title: '4.0-5.0', value: false }
];

export default ratingSearchCheckBoxes;
