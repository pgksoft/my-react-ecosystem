import type TUnknownRecord from '../../app-types/t-unknown-record';
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

type TModalCommand = {
  onReady: (dto: TUnknownRecord | FormData | null) => void;
};

export type TEntityToolModalCommand = {
  toolType: 'modal-command';
  Component: React.FC<TModalCommand>;
};

type TEntityToolTypes<K extends TEntityToolName> =
  K extends TPopupEntityToolName
    ? TEntityToolPopup
    : K extends TModalCommandEntityToolName
      ? TEntityToolModalCommand
      : never;

export default TEntityToolTypes;
