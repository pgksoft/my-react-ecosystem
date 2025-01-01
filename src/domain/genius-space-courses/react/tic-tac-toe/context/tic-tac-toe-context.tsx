import { createContext } from 'react';
import { TGameField, THistoryGame, TStatus } from './types/types';

type TTicTacToeContext = {
  gameFieldSize: number;
  status: TStatus;
  setStatus: (status: TStatus) => void;
  history: THistoryGame;
  setHistory: (history: THistoryGame) => void;
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
  isNextX: boolean;
  setIsNextX: (value: boolean) => void;
  currentGameField: TGameField;
  setCurrentGameField: (currentGameField: TGameField) => void;
  handleCellClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  jumpToGameStep: (step: number) => void;
};

export const initTicTacToeContext: TTicTacToeContext = {
  gameFieldSize: 0,
  status: { state: 'play', player: 'x' },
  setStatus: () => {},
  history: [],
  setHistory: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
  isNextX: true,
  setIsNextX: () => {},
  currentGameField: [],
  setCurrentGameField: () => {},
  handleCellClick: () => {},
  jumpToGameStep: () => {}
};

// eslint-disable-next-line prettier/prettier
export const TicTacToeContext = createContext<TTicTacToeContext>(
  initTicTacToeContext
);
