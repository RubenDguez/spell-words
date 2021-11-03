import { TRow } from "../Types";

export const initialState = {
  isStarted: false,
  meanings: [""],
  possiblePoints: 0,
  skipped: 0,
  tableData: new Array<TRow>(),
  totalCorrect: 0,
  totalIncorrect: 0,
  totalPoints: 0,
  totalWords: 0,
  word: "Spell the Words",
  wordsToPlay: 10,
};
