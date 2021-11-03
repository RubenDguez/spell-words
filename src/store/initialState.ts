import { TRow, TWord } from "../Types";

const word: TWord = { id: "A0", word: "Start Game" };

export const initialState = {
  isStarted: false,
  level: 1,
  minLevel: 1,
  maxLevel: 5,
  meanings: Array<string>(),
  possiblePoints: 0,
  skipped: 0,
  tableData: new Array<TRow>(),
  totalCorrect: 0,
  totalIncorrect: 0,
  totalPoints: 0,
  totalWords: 0,
  word: word,
  wordsToPlay: 10,
  words: Array<TWord>(),
  wordList: Array<TWord>(),
};
