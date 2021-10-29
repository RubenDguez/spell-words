import axios from "axios";
import { useCallback, useReducer } from "react";
import { Action, State, TLetterValues } from "../Types";

const URL = "https://random-word-api.herokuapp.com/word";

const LETTER_VALUES: TLetterValues[] = [
  { letters: "aeilnorstu", value: 1 },
  { letters: "dg", value: 2 },
  { letters: "bcmp", value: 3 },
  { letters: "fhvwy", value: 4 },
  { letters: "k", value: 5 },
  { letters: "jx", value: 8 },
  { letters: "qz", value: 10 },
];

const getWord = () =>
  new Promise<string>((resolve, reject) => {
    axios
      .get(URL)
      .then((resp) => {
        resolve(`${resp.data[0]}`);
      })
      .catch((err) => {
        reject(`${err}`);
      });
  });

const getWordValue = (word: string) => {
  let val = 0;
  word.split("").forEach((fe) => {
    LETTER_VALUES.forEach((lfe) => {
      if (lfe.letters.split("").indexOf(fe) >= 0) {
        val += lfe.value;
      }
    });
  });
  return val;
};

const initialState: State = {
  isStarted: false,
  possiblePoints: 0,
  tableData: [],
  totalCorrect: 0,
  totalIncorrect: 0,
  totalPoints: 0,
  word: "Start Game",
};

const reducer = (state: State, action: Action): State => {
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

export const useGame = () => {
  const [
    {
      word,
      totalPoints,
      totalCorrect,
      totalIncorrect,
      possiblePoints,
      isStarted,
      tableData,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const startGame = useCallback(() => {
    getWord().then((resp) => {
      dispatch({ type: "START GAME", payload: { word: resp } });
    });
  }, [dispatch]);

  const correct = useCallback(() => {
    getWord().then((resp) => {
      dispatch({
        type: "CORRECT",
        payload: { word: resp },
      });
    });
  }, [dispatch]);

  const incorrect = useCallback(() => {
    getWord().then((resp) => {
      dispatch({
        type: "INCORRECT",
        payload: { word: resp },
      });
    });
  }, [dispatch]);

  const caps = (word: string) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  };

  return {
    word,
    totalPoints,
    totalCorrect,
    totalIncorrect,
    possiblePoints,
    isStarted,
    tableData,
    startGame,
    correct,
    incorrect,
    caps,
  };
};
