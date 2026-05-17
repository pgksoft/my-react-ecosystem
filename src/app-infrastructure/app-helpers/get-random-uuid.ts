const getRandom = () => {
  return Math.random().toString(36).slice(2, 11);
};

const getRandomUuid = () => {
  return `${getRandom()}-${getRandom()}-${getRandom()}`;
};

export default getRandomUuid;
