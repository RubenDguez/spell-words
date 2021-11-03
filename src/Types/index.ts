import { initialState } from "../store";

export type State = typeof initialState;

export type TRow = {
  word: string;
  outcome: "CORRECT" | "INCORRECT" | "SKIPPED";
  points: number;
};

export type Action =
  | {
      type: "START GAME";
      payload: { word: string; wordsToPlay: number; meanings: TResponse };
    }
  | { type: "RESTART GAME"; payload: { state: State } }
  | { type: "CORRECT"; payload: { word: string; meanings: TResponse } }
  | { type: "INCORRECT"; payload: { word: string; meanings: TResponse } }
  | { type: "SKIP"; payload: { word: string; meanings: TResponse } };

export type TLetterValues = {
  letters: string;
  value: number;
};

export type TResponse = {
  shortdef: string[];
};

export type TWordResponse = {
  word: string;
  meanings: TResponse;
};
