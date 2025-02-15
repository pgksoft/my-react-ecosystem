export interface TMember extends Record<string, unknown> {
  id: string;
  '@type': string;
  '@id': string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMember(obj: any): obj is TMember {
  return obj && typeof obj.id === 'string' && typeof obj['@type'] === 'string';
}
