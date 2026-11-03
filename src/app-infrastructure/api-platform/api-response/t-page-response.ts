import isPlainObject from '../../app-helpers/is-plain-object';
import type TypeGuard from '../../app-types/type-guard';

export type TEntityView = {
  page: number;
  size: number;
  first: number;
  last: number;
  next: number;
  previous: number;
};

export type TPageResponse<T> = {
  items: T[];
  total: number;
  entityView?: TEntityView;
};

export const isEntityView: TypeGuard<TEntityView> = (
  value
): value is TEntityView => {
  if (!isPlainObject(value)) return false;
  if (!('page' in value) || typeof value.page !== 'number') return false;
  if (!('size' in value) || typeof value.size !== 'number') return false;
  if (!('first' in value) || typeof value.first !== 'number') return false;
  if (!('last' in value) || typeof value.last !== 'number') return false;
  if (!('next' in value) || typeof value.next !== 'number') return false;
  if (!('previous' in value) || typeof value.previous !== 'number')
    return false;

  return true;
};

export const isPageResponse: TypeGuard<TPageResponse<unknown>> = (
  value
): value is TPageResponse<unknown> => {
  if (!isPlainObject(value)) return false;

  if (!('items' in value) || !Array.isArray(value.items)) return false;
  if (!('total' in value) || typeof value.total !== 'number') return false;
  if ('entityView' in value && value.entityView !== undefined) {
    if (!isEntityView(value.entityView)) return false;
  }
  return true;
};
