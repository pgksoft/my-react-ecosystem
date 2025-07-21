const replaceNumberString = (value: string, isIntNumber: boolean): string => {
  let regExp = new RegExp(/[^.,\d]/g);
  if (isIntNumber) {
    regExp = new RegExp(/[^\d]/g);
  }
  return value
    .replace(/^0+(?![^\d]|$)/g, '')
    .replace(regExp, '')
    .replace(',', '.');
};

export default replaceNumberString;
