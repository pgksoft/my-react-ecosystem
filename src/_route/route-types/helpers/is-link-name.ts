import getEnumNames from '../../../domain/_infrastructure/helpers/get-enum-names';
import BaseLinkNames from '../const/base-link-names';
import FormicLinkNames from '../const/formic-link-names';
import GeniusSpaceCoursesLinkNames from '../const/genius-space-courses-link-names';
import JsDavidFlanagan7thEditionLinkNames from '../const/js-david-flanagan-7th-edition-link-names';
import { TLinkNames } from '../route-types';

const LinkNames = [
  ...getEnumNames(BaseLinkNames),
  ...getEnumNames(FormicLinkNames),
  ...getEnumNames(JsDavidFlanagan7thEditionLinkNames),
  ...getEnumNames(GeniusSpaceCoursesLinkNames)
];

export const isLinkName = (value: string): value is TLinkNames => {
  return LinkNames.includes(value);
};
