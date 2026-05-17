import { TCellVal, TGameField } from '../context/types/types';

const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const calculateWinner = (gameField: TGameField): TCellVal => {
  for (const line of winLines) {
    const [a, b, c] = line;
    if (
      gameField[a] &&
      gameField[a] === gameField[b] &&
      gameField[a] === gameField[c]
    ) {
      return gameField[a];
    }
  }
  return null;
};

export default calculateWinner;
