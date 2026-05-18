import { IEntityMember } from '../../../api-platform/app-entities/entity-member/entity-member';

type TDialogRemove<T extends IEntityMember> = {
  entity: T;
};

export default TDialogRemove;
