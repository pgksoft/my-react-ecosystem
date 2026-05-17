import type { TypographyOwnProps } from '@mui/material/Typography';
import createIsUnknownRecordKeyGuard from '../../../../../app-infrastructure/app-helpers/create-is-unknown-record-key-guard';
import { COLORS } from '../../../../../app-infrastructure/app-const/colors';

type TRatingLabel =
  | 'No Rating'
  | 'Useless'
  | 'Useless+'
  | 'Poor'
  | 'Poor+'
  | 'Ok'
  | 'Ok+'
  | 'Good'
  | 'Good+'
  | 'Excellent'
  | 'Excellent+';

export type TCheckRating = {
  color: TypographyOwnProps['color'];
  label: TRatingLabel;
};

const mapCheckRating = {
  0: { color: 'textDisabled', label: 'No Rating' },
  5: { color: COLORS.secondary, label: 'Useless' },
  10: { color: COLORS.secondary, label: 'Useless+' },
  15: { color: 'warning', label: 'Poor' },
  20: { color: 'warning', label: 'Poor+' },
  25: { color: 'info', label: 'Ok' },
  30: { color: 'info', label: 'Ok+' },
  35: { color: 'secondary', label: 'Good' },
  40: { color: 'secondary', label: 'Good+' },
  45: { color: 'success', label: 'Excellent' },
  50: { color: 'success', label: 'Excellent+' }
} as const satisfies Record<string, TCheckRating>;

const isMapCheckRatingKey = createIsUnknownRecordKeyGuard(mapCheckRating);

export const getCheckRating = (rating: number): TCheckRating => {
  const ratingKey = (Math.ceil(rating / 5) * 5).toString();
  if (isMapCheckRatingKey(ratingKey)) return mapCheckRating[ratingKey];
  return mapCheckRating[0];
};
