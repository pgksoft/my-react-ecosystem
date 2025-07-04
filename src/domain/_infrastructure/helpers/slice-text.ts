export const sliceText = (str: string, max: number = 50) => {
  if (!str) return '';
  let strSlice = str.slice(0, max);
  const indexLastSymbol = strSlice.length - 1;
  if (strSlice[indexLastSymbol] === ' ') {
    strSlice = strSlice.slice(0, indexLastSymbol);
  }
  let endStr = '';
  if (str.length > max) {
    endStr = '...';
  }
  return `${strSlice}${endStr}`;
};
