export type TCellVal = 'x' | '0' | null;

export type TGameField = TCellVal[];

export type THistoryStep = { player: TCellVal; gameField: TGameField };

export type THistoryGame = THistoryStep[];

type TState = 'play' | 'win';

export type TPlayer = Exclude<TCellVal, null>;

export type TStatus = { state: TState; player: TPlayer };
