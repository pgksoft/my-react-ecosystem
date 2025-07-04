import isArrayOfTypePredicate from '../../helpers/is-array-of-type-predicate';
import { isEntityMember } from './is-entity-member';

const isEntityMemberArray = isArrayOfTypePredicate(isEntityMember);

export default isEntityMemberArray;
