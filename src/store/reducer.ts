import { Action, TState } from "../Types";
import { getWordValue } from "../utils";

export const reducer = (state: TState, action: Action): TState => {
  switch (action.type) {
    case "SET WORDS":
      return {
        ...state,
        words: action.payload.words,
      };
    case "START GAME":
      return {
        ...state,
        isStarted: true,
        word: action.payload.word,
        meanings: action.payload.meanings.shortdef,
        wordsToPlay: action.payload.wordsToPlay,
        possiblePoints: getWordValue(action.payload.word.word),
        level: action.payload.level,
        wordList: [action.payload.word, ...state.wordList],
      };
    case "CORRECT":
      return {
        ...state,
        word: action.payload.word,
        meanings: action.payload.meanings.shortdef,
        possiblePoints: getWordValue(action.payload.word.word),
        totalCorrect: (state.totalCorrect += 1),
        totalWords: (state.totalWords += 1),
        totalPoints: (state.totalPoints += state.possiblePoints),
        wordList: [action.payload.word, ...state.wordList],
        tableData: [
          {
            word: state.word,
            outcome: "CORRECT",
            points: state.possiblePoints,
          },
          ...state.tableData,
        ],
      };
    case "INCORRECT":
      return {
        ...state,
        word: action.payload.word,
        meanings: action.payload.meanings.shortdef,
        totalIncorrect: (state.totalIncorrect += 1),
        totalWords: (state.totalWords += 1),
        possiblePoints: getWordValue(action.payload.word.word),
        wordList: [action.payload.word, ...state.wordList],
        tableData: [
          { word: state.word, outcome: "INCORRECT", points: 0 },
          ...state.tableData,
        ],
      };
    case "SKIP":
      return {
        ...state,
        word: action.payload.word,
        meanings: action.payload.meanings.shortdef,
        possiblePoints: getWordValue(action.payload.word.word),
        skipped: (state.skipped += 1),
        wordList: [action.payload.word, ...state.wordList],
        tableData: [
          { word: state.word, outcome: "SKIPPED", points: 0 },
          ...state.tableData,
        ],
      };
    case "RESTART GAME":
      return {
        ...state,
        ...action.payload.state,
      };
    default:
      return {
        ...state,
      };
  }
};
