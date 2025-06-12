import { TITLES_JS_DAVID_FLANAGAN_7TH_EDITION } from '../../../../domain/js-david-flanagan-7th-edition/const/titles';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../../../../domain/js-david-flanagan-7th-edition/computing-frequency-each-letter-in-text/const/titles';
import { TAuthUserJsDavidFlanagan7thEditionLinks } from '../../../route-types/route-types';
import TLink from '../../../../domain/_infrastructure/types/t-link';

export const computesFrequencyEachLetterInText: TLink = {
  title: TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.title,
  appRoute:
    '/js-david-flanagan-7th-edition/computes-frequency-each-letter-in-text'
};

export const jsDavidFlanagan7thEdition: TLink = {
  title: TITLES_JS_DAVID_FLANAGAN_7TH_EDITION.title,
  appRoute: '/js-david-flanagan-7th-edition',
  nameIcon: 'jsDavidFlanagan',
  subLinks: [computesFrequencyEachLetterInText]
};

export const LINKS_AUTH_USER_JS_DAVID_FLANAGAN: TAuthUserJsDavidFlanagan7thEditionLinks =
  {
    jsDavidFlanagan7thEdition,
    computesFrequencyEachLetterInText
  };
