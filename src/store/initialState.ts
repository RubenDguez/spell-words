import { TRow } from "../Types";

export const initialState = {
  isStarted: false,
  possiblePoints: 0,
  skipped: 0,
  tableData: new Array<TRow>(),
  totalCorrect: 0,
  totalIncorrect: 0,
  totalWords: 0,
  totalPoints: 0,
  wordsToPlay: 10,
  word: "Spell the Words",
};
