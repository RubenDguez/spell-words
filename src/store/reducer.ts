import { Action, State } from "../Types";
import { getWordValue } from "../utils";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START GAME":
      return {
        ...state,
        isStarted: true,
        word: action.payload.word,
        possiblePoints: getWordValue(action.payload.word),
      };
    case "CORRECT":
      return {
        ...state,
        word: action.payload.word,
        possiblePoints: getWordValue(action.payload.word),
        totalCorrect: (state.totalCorrect += 1),
        totalPoints: (state.totalPoints += state.possiblePoints),
        tableData: [
          { word: state.word, outcome: true, points: state.possiblePoints },
          ...state.tableData,
        ],
      };
    case "INCORRECT":
      return {
        ...state,
        word: action.payload.word,
        totalIncorrect: (state.totalIncorrect += 1),
        possiblePoints: getWordValue(action.payload.word),
        tableData: [
          { word: state.word, outcome: false, points: 0 },
          ...state.tableData,
        ],
      };
  }
};
