export const isEqualStringArrays = (
  first: string[],
  second: string[]
): boolean => {
  const keys = new Set<string>([...first, ...second]);
  for (const key of keys) {
    const va = first.includes(key);
    const vb = second.includes(key) ?? false;
    if (va !== vb) return false;
  }
  return true;
};
