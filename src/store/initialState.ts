import { TRow } from "../Types";

export const initialState = {
  isStarted: false,
  possiblePoints: 0,
  tableData: new Array<TRow>(),
  totalCorrect: 0,
  totalIncorrect: 0,
  totalPoints: 0,
  word: "Spell the Words",
};
