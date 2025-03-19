import TElement from '../../../domain/_infrastructure/types/t-element';
import IconNames from './const/icon-names';

export type TIconNames = keyof typeof IconNames;

type TChoiceIcon = Record<TIconNames, TElement>;

export default TChoiceIcon;
