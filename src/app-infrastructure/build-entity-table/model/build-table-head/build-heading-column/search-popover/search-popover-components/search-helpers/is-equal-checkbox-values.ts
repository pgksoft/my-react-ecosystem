import type { TColumnCheckboxItem } from '../../../../../../table-types/t-column-schemas';

export const isEqualCheckBoxValues = (
  first: TColumnCheckboxItem[],
  second: TColumnCheckboxItem[]
): boolean => {
  const mapFirst = new Map<string, boolean>(
    first.map((item) => {
      return [item.key, item.value];
    })
  );
  const mapSecond = new Map<string, boolean>(
    second.map((item) => {
      return [item.key, item.value];
    })
  );
  const keys = new Set<string>([...mapFirst.keys(), ...mapSecond.keys()]);
  for (const key of keys) {
    const va = mapFirst.get(key) ?? false;
    const vb = mapSecond.get(key) ?? false;
    if (va !== vb) return false;
  }
  return true;
};
