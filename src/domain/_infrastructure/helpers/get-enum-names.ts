const getEnumNames = (value: object): string[] => {
  return Object.keys(value).filter((key) => {
    return isNaN(Number(key));
  });
};

export default getEnumNames;
