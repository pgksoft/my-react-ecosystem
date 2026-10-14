import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import type { TModalCommandDescription } from '../../modal-commands/t-modal-command-dialog/t-modal-command-dialog';
import type TEntityToolName from './t-entity-tool-names';
import type {
  TModalCommandEntityToolName,
  TPopupEntityToolName
} from './t-entity-tool-names';

export type TEntityToolPopup = {
  toolType: 'popup';
  popup: string;
  title: string;
};

export type TEntityToolModalCommand = {
  toolType: 'modal-command';
  description: TModalCommandDescription<IEntityMember>;
};

type TEntityToolTypes<K extends TEntityToolName> =
  K extends TPopupEntityToolName
    ? TEntityToolPopup
    : K extends TModalCommandEntityToolName
      ? TEntityToolModalCommand
      : never;

export default TEntityToolTypes;
