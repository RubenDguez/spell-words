import { initialState } from "../store";

export type TState = typeof initialState;

export type TRow = {
  word: TWord;
  outcome: "CORRECT" | "INCORRECT" | "SKIPPED";
  points: number;
};

export type Action =
  | {
      type: "START GAME";
      payload: {
        word: TWord;
        wordsToPlay: number;
        meanings: TResponse;
        level: number;
      };
    }
  | { type: "SET WORDS"; payload: { words: TWord[] } }
  | { type: "RESTART GAME"; payload: { state: TState } }
  | { type: "CORRECT"; payload: { word: TWord; meanings: TResponse } }
  | { type: "INCORRECT"; payload: { word: TWord; meanings: TResponse } }
  | { type: "SKIP"; payload: { word: TWord; meanings: TResponse } };

export type TLetterValues = {
  letters: string;
  value: number;
};

export type TResponse = {
  shortdef: string[];
};

export type TWordResponse = {
  word: TWord;
  meanings: TResponse;
};

export type TWord = {
  id: string;
  word: string;
};

export interface IStoreContext {
  store: typeof initialState;
  startGame: (words: number, level: number) => void;
  restartGame: () => void;
  correct: () => void;
  incorrect: () => void;
  skip: () => void;
}
