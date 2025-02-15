import { TLink } from '../../../context/route-context';
import { TITLES_JS_DAVID_FLANAGAN_7TH_EDITION } from '../../../domain/js-david-flanagan-7th-edition/const/titles';
import { JsDavidFlanagan7thEditionIcon } from '../icons/js-david-flanagan-7th-edition-icon';
import { TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT } from '../../../domain/js-david-flanagan-7th-edition/computing-frequency-each-letter-in-text/const/titles';
import { TAuthUserJsDavidFlanagan7thEditionLinks } from '../../types/types';

export const computesFrequencyEachLetterInText: TLink = {
  title: TITLES_COMPUTES_FREQUENCY_EACH_LETTER_IN_TEXT.title,
  url: '/js-david-flanagan-7th-edition/computes-frequency-each-letter-in-text'
};

export const jsDavidFlanagan7thEdition: TLink = {
  title: TITLES_JS_DAVID_FLANAGAN_7TH_EDITION.title,
  url: '/js-david-flanagan-7th-edition',
  getIcon: JsDavidFlanagan7thEditionIcon,
  subLinks: [computesFrequencyEachLetterInText]
};

export const LINKS_AUTH_USER_JS_DAVID_FLANAGAN: TAuthUserJsDavidFlanagan7thEditionLinks =
  {
    jsDavidFlanagan7thEdition,
    computesFrequencyEachLetterInText
  };
