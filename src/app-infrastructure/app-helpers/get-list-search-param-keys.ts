import { getArrayAsStringConst } from './get-array-as-string-const';

export const getListSearchParamKeys = (
  map: Record<string, readonly string[]>
) => {
  const out: string[] = [];
  for (const k of Object.keys(map)) {
    const arr = map[k];
    for (const v of arr) out.push(v);
  }
  return getArrayAsStringConst(...out);
};
