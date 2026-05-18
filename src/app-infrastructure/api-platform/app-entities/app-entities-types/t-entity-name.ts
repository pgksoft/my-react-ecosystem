import TCapitalizeFirstLetter from '../../../app-types/t-capitalize-first-letter';
import TEntityNameKeys from './t-entity-key-names';

export type TParameterizedEntityName<K extends TEntityNameKeys> =
  TCapitalizeFirstLetter<K>;

type TEntityName = TCapitalizeFirstLetter<TEntityNameKeys>;

export default TEntityName;
