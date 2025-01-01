import TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE from '../const/titles';
import { TPlayer, TStatus } from '../context/types/types';

const getNamePlayer = (player: TPlayer) => {
  return (
    (player === 'x' && TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE.X) ||
    TITLES_GENIUS_SPACE_COURSES_REACT_TIC_TAC_TOE.O
  );
};

const getStatusString = (
  status: TStatus,
  currentStep: number,
  gameFieldSize: number
): string => {
  const { state, player } = status;
  if (state === 'win') return `Winner: ${getNamePlayer(player)}`;
  if (state === 'play' && currentStep === gameFieldSize)
    return 'Draw in the game';
  return `Player: ${getNamePlayer(player)}`;
};

export default getStatusString;
