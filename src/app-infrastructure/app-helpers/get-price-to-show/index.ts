const getPriceToShow = (priceCents: number) => {
  return (priceCents / 100).toFixed(2);
};

export default getPriceToShow;
