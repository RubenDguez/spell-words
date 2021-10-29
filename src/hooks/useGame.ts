import { useCallback, useReducer } from "react";
import { initialState } from "../store";
import { reducer } from "../store";
import { getWord } from "../utils";

export const useGame = () => {
  const [
    {
      word,
      wordsToPlay,
      totalPoints,
      totalCorrect,
      totalIncorrect,
      totalWords,
      possiblePoints,
      skipped,
      isStarted,
      tableData,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const startGame = useCallback(
    (words: number) => {
      getWord().then((resp) => {
        dispatch({
          type: "START GAME",
          payload: { word: resp, wordsToPlay: words },
        });
      });
    },
    [dispatch]
  );

  const restartGame = useCallback(() => {
    dispatch({ type: "RESTART GAME", payload: { state: initialState } });
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

  const skip = useCallback(() => {
    getWord().then((resp) => {
      dispatch({
        type: "SKIP",
        payload: { word: resp },
      });
    });
  }, [dispatch]);

  return {
    word,
    wordsToPlay,
    totalPoints,
    totalCorrect,
    totalIncorrect,
    totalWords,
    possiblePoints,
    skipped,
    isStarted,
    tableData,
    startGame,
    restartGame,
    correct,
    incorrect,
    skip,
  };
};
