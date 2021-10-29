import { useCallback, useReducer } from "react";
import { initialState } from "../store";
import { reducer } from "../store";
import { getWord } from "../utils";

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
  };
};
