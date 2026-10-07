import TEntityToolTypes from './t-entity-tool-types';
import TEntityToolName from './t-entity-tool-names';

type TEntityToolList = Partial<{ [K in TEntityToolName]: TEntityToolTypes<K> }>;

export default TEntityToolList;
