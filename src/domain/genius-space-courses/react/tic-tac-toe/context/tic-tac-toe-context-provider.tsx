import React, { FC, ReactNode, useEffect, useState } from 'react';
import { TicTacToeContext } from './tic-tac-toe-context';
import { TCellVal, TGameField, THistoryGame, TStatus } from './types/types';
import getCellVal from '../util/get-cell-val';
import calculateWinner from '../util/calculate-winner';

type TContextProviderProps = { children: ReactNode };

const gameFieldSize = 9;

const TicTacToeContextProvider: FC<TContextProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<THistoryGame>([
    { player: null, gameField: Array<TCellVal>(gameFieldSize).fill(null) }
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isNextX, setIsNextX] = useState(currentStep % 2 === 0);
  const [currentGameField, setCurrentGameField] = useState<TGameField>(
    history[currentStep].gameField
  );
  const [status, setStatus] = useState<TStatus>({
    state: 'play',
    player: getCellVal(isNextX)
  });

  const handleCellClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cellNumber = Number(e.currentTarget.dataset.cell);
    if (!(currentGameField[cellNumber] || status.state === 'win')) {
      const nextGameField = currentGameField.slice();
      const cellVal = getCellVal(isNextX);
      nextGameField[cellNumber] = cellVal;
      const nextHistory: THistoryGame = [
        ...history.slice(0, currentStep + 1),
        { player: cellVal, gameField: nextGameField }
      ];
      setCurrentGameField(nextGameField);
      setHistory(nextHistory);
      setCurrentStep(nextHistory.length - 1);
    }
  };

  const jumpToGameStep = (step: number) => {
    setCurrentGameField(history[step].gameField);
    setCurrentStep(step);
  };

  useEffect(() => {
    setIsNextX(currentStep % 2 === 0);
    const winner = calculateWinner(currentGameField);
    setStatus({
      state: (winner && 'win') || 'play',
      player: (winner && winner) || getCellVal(isNextX)
    });
  }, [currentGameField, currentStep, isNextX]);

  return (
    <TicTacToeContext.Provider
      value={{
        gameFieldSize,
        status,
        setStatus,
        history,
        setHistory,
        currentStep,
        setCurrentStep,
        currentGameField,
        isNextX,
        setIsNextX,
        setCurrentGameField,
        handleCellClick,
        jumpToGameStep
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
};

export default TicTacToeContextProvider;
