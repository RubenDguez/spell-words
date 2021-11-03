import React, {
  createContext,
  ReactNode,
  useCallback,
  useReducer,
} from "react";
import { initialState, reducer } from "../store";
import { IStoreContext } from "../Types";
import { getAllWords, getWord } from "../utils";

interface IStoreProvider {
  children: ReactNode;
}

export const StoreContext = createContext<IStoreContext>({
  store: initialState,
  startGame: (words: number, level: number) => {},
  restartGame: () => {},
  correct: () => {},
  incorrect: () => {},
  skip: () => {},
});

export const StoreProvider = ({ children }: IStoreProvider) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  const startGame = useCallback(
    (words: number, level: number) => {
      getAllWords(level).then((resp) => {
        dispatch({ type: "SET WORDS", payload: { words: resp } });

        getWord(resp, store.wordList).then((resp) => {
          dispatch({
            type: "START GAME",
            payload: {
              ...resp,
              wordsToPlay: words,
              level,
              word: resp.word,
            },
          });
        });
      });
    },
    [dispatch, store]
  );

  const restartGame = useCallback(() => {
    dispatch({ type: "RESTART GAME", payload: { state: initialState } });
  }, [dispatch]);

  const correct = useCallback(() => {
    getWord(store.words, store.wordList).then((resp) => {
      dispatch({
        type: "CORRECT",
        payload: resp,
      });
    });
  }, [dispatch, store]);

  const incorrect = useCallback(() => {
    getWord(store.words, store.wordList).then((resp) => {
      dispatch({
        type: "INCORRECT",
        payload: resp,
      });
    });
  }, [dispatch, store]);

  const skip = useCallback(() => {
    getWord(store.words, store.wordList).then((resp) => {
      dispatch({
        type: "SKIP",
        payload: resp,
      });
    });
  }, [dispatch, store]);

  return (
    <>
      <StoreContext.Provider
        value={{ store, startGame, restartGame, correct, incorrect, skip }}
      >
        {children}
      </StoreContext.Provider>
    </>
  );
};
