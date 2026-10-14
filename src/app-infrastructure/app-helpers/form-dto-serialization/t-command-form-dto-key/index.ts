import type TEntityNameKeys from '../../../api-platform/app-entities/app-entities-types/t-entity-key-names';
import type { TModalCommandEntityToolName } from '../../../entity-tools/entity-tools-types/t-entity-tool-names';

type TModalCommandFormDtoKey =
  `${Capitalize<TEntityNameKeys>}Command${Capitalize<TModalCommandEntityToolName>}`;

export default TModalCommandFormDtoKey;
