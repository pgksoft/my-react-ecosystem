import TEntityToolName from './t-entity-tool-names';

type TEntityToolIcon = () => JSX.Element;

type TChoiceEntityToolIcon = Record<TEntityToolName, TEntityToolIcon>;

export default TChoiceEntityToolIcon;
