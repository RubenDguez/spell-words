import { useCallback, useReducer } from "react";
import { initialState } from "../store";
import { reducer } from "../store";
import { getAllWords, getWord } from "../utils";

export const useGame = () => {
  const [
    {
      word,
      meanings,
      wordsToPlay,
      totalPoints,
      totalCorrect,
      totalIncorrect,
      totalWords,
      possiblePoints,
      skipped,
      isStarted,
      tableData,
      level,
      minLevel,
      maxLevel,
      words,
      wordList,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const startGame = useCallback(
    (w: number, l: number) => {
      getAllWords(l).then((resp) => {
        dispatch({ type: "SET WORDS", payload: { words: resp } });

        getWord(resp, wordList).then((resp) => {
          dispatch({
            type: "START GAME",
            payload: {
              ...resp,
              wordsToPlay: w,
              level,
              word: resp.word,
            },
          });
        });
      });
    },
    [dispatch, wordList, level]
  );

  const restartGame = useCallback(() => {
    dispatch({ type: "RESTART GAME", payload: { state: initialState } });
  }, [dispatch]);

  const correct = useCallback(() => {
    getWord(words, wordList).then((resp) => {
      dispatch({
        type: "CORRECT",
        payload: resp,
      });
    });
  }, [dispatch, wordList, words]);

  const incorrect = useCallback(() => {
    getWord(words, wordList).then((resp) => {
      dispatch({
        type: "INCORRECT",
        payload: resp,
      });
    });
  }, [dispatch, wordList, words]);

  const skip = useCallback(() => {
    getWord(words, wordList).then((resp) => {
      dispatch({
        type: "SKIP",
        payload: resp,
      });
    });
  }, [dispatch, wordList, words]);

  return {
    word,
    meanings,
    wordsToPlay,
    totalPoints,
    totalCorrect,
    totalIncorrect,
    totalWords,
    possiblePoints,
    skipped,
    isStarted,
    tableData,
    level,
    minLevel,
    maxLevel,
    words,
    wordList,
    startGame,
    restartGame,
    correct,
    incorrect,
    skip,
  };
};
