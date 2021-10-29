import { initialState } from "../store";

export type State = typeof initialState;

export type TRow = {
  word: string;
  outcome: boolean;
  points: number;
};

export type Action =
  | { type: "START GAME"; payload: { word: string } }
  | { type: "CORRECT"; payload: { word: string } }
  | { type: "INCORRECT"; payload: { word: string } };

export type TLetterValues = {
  letters: string;
  value: number;
};
