import { TLink } from '../../context/route-context';
import BaseLinkNames from './const/base-link-names';
import FormicLinkNames from './const/formic-link-names';
import GeniusSpaceCoursesLinkNames from './const/genius-space-courses-link-names';
import JsDavidFlanagan7thEditionLinkNames from './const/js-david-flanagan-7th-edition-link-names';

export type TLinkNames =
  | keyof typeof BaseLinkNames
  | keyof typeof FormicLinkNames
  | keyof typeof JsDavidFlanagan7thEditionLinkNames
  | keyof typeof GeniusSpaceCoursesLinkNames;

export type TAuthUserLinks = Record<TLinkNames, TLink>;

export type TAuthUserFormicLinks = Record<keyof typeof FormicLinkNames, TLink>;

export type TAuthUserJsDavidFlanagan7thEditionLinks = Record<
  keyof typeof JsDavidFlanagan7thEditionLinkNames,
  TLink
>;

export type TAuthUserGeniusSpaceCoursesLinks = Record<
  keyof typeof GeniusSpaceCoursesLinkNames,
  TLink
>;
