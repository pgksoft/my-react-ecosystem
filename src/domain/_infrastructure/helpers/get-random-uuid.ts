const getRandom = () => {
  return Math.random().toString(36).substr(2, 9);
};

const getRandomUuid = () => {
  return `${getRandom()}-${getRandom()}-${getRandom()}`;
};

export default getRandomUuid;
