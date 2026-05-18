export const getArrayAsStringConst = <const T extends readonly string[]>(
  ...items: T
) => {
  return items as readonly [...T];
};
