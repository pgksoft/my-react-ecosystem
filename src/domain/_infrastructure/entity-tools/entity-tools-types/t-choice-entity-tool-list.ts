import TEntityNameKeys from '../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import TEntityToolList from './t-entity-tool-list';

type TChoiceEntityToolList = Partial<Record<TEntityNameKeys, TEntityToolList>>;

export default TChoiceEntityToolList;
