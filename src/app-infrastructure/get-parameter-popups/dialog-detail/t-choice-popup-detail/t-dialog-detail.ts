import type { ReactNode } from 'react';
import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';
import type TUnknownRecord from '../../../app-types/t-unknown-record';

type TDetailDialog<T extends IEntityMember> = {
  entity: T;
  onUpdateDtoReady: (dto: FormData | TUnknownRecord | null) => void;
  getBriefDescription: (value: ReactNode) => void;
};

export default TDetailDialog;
