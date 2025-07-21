import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';

type TDetailDialog<T extends IEntityMember> = {
  entity: T;
  getBriefDescription: (value: string) => void;
  onUpdateDtoReady: (dto: string | null) => void;
};

export default TDetailDialog;
