import type { IEntityMember } from '../../api-platform/app-entities/entity-member/entity-member';
import type TUnknownRecord from '../../app-types/t-unknown-record';

export type TModalCommandDetailDialog<T extends IEntityMember> = {
  entity?: T;
  onDtoReady: (dto: FormData | TUnknownRecord | null) => void;
};
