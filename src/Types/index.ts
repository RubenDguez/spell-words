import { initialState } from "../store";

export type State = typeof initialState;

export type TRow = {
  word: string;
  outcome: "CORRECT" | "INCORRECT" | "SKIPPED";
  points: number;
};

export type Action =
  | { type: "START GAME"; payload: { word: string; wordsToPlay: number } }
  | { type: "RESTART GAME"; payload: { state: State } }
  | { type: "CORRECT"; payload: { word: string } }
  | { type: "INCORRECT"; payload: { word: string } }
  | { type: "SKIP"; payload: { word: string } };

export type TLetterValues = {
  letters: string;
  value: number;
};
