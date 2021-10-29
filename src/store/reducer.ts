import { Action, State } from "../Types";
import { getWordValue } from "../utils";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START GAME":
      return {
        ...state,
        isStarted: true,
        word: action.payload.word,
        wordsToPlay: action.payload.wordsToPlay,
        possiblePoints: getWordValue(action.payload.word),
      };
    case "CORRECT":
      return {
        ...state,
        word: action.payload.word,
        possiblePoints: getWordValue(action.payload.word),
        totalCorrect: (state.totalCorrect += 1),
        totalWords: (state.totalWords += 1),
        totalPoints: (state.totalPoints += state.possiblePoints),
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
        totalIncorrect: (state.totalIncorrect += 1),
        totalWords: (state.totalWords += 1),
        possiblePoints: getWordValue(action.payload.word),
        tableData: [
          { word: state.word, outcome: "INCORRECT", points: 0 },
          ...state.tableData,
        ],
      };
    case "SKIP":
      return {
        ...state,
        word: action.payload.word,
        possiblePoints: getWordValue(action.payload.word),
        skipped: (state.skipped += 1),
        wordsToPlay: 10,
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
