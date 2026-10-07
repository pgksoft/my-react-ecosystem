const getNormalizedRatingAsStoredValue = (rating: number): number => {
  if (rating >= 0 && rating <= 5) return rating * 10;
  return 0;
};

export default getNormalizedRatingAsStoredValue;
