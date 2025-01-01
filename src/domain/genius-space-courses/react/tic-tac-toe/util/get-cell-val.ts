const getCellVal = (isNextX: boolean) => {
  return (isNextX && 'x') || '0';
};

export default getCellVal;
