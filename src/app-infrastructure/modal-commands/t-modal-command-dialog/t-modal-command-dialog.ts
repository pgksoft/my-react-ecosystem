import type { Breakpoint } from '@mui/material';
import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import type { TModalCommandDetailDialog } from './t-modal-command-detail-dialog';
import type { TFormDtoKey } from '../../app-helpers/form-dto-serialization';

export type TModalCommandDescription<T extends IEntityMember> = {
  Component: React.FC<TModalCommandDetailDialog<T>>;
  activationMethod: 'one-item' | 'many-items' | 'not-selected';
  apiUrl: string;
  title: string;
  titleSuccess: string;
  commandConfirmTitle: string;
  entityDialogsFieldsKey: TFormDtoKey;
  fullWidth?: boolean;
  maxWidth?: false | Breakpoint;
};
