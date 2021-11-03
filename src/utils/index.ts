import axios from "axios";
import { TResponse, TLetterValues, TWordResponse, TWord } from "../Types";

const URL = process.env.REACT_APP_WEBSTER_URL;
const API_KEY = process.env.REACT_APP_WEBSTER_API_KEY;

const LETTER_VALUES: TLetterValues[] = [
  { letters: "aeilnorstu", value: 1 },
  { letters: "dg", value: 2 },
  { letters: "bcmp", value: 3 },
  { letters: "fhvwy", value: 4 },
  { letters: "k", value: 5 },
  { letters: "jx", value: 8 },
  { letters: "qz", value: 10 },
];

export const getMeaning = (word: TWord) =>
  new Promise<TResponse>((resolve, reject) => {
    let ret: TResponse;
    axios.get<TResponse[]>(`${URL}${word.word}${API_KEY}`).then((resp) => {
      if (resp.data) {
        resp.data.forEach((fe) => {
          ret = { ...ret, shortdef: fe.shortdef };
        });
        resolve(ret);
      }
    });
  });

export const getWord = (words: TWord[], list: TWord[]) =>
  new Promise<TWordResponse>((resolve) => {
    let state = { duplicate: false, index: 0, word: { id: "", word: "" } };

    do {
      try {
        state.duplicate = false;
        state.index = Math.floor(Math.random() * words.length - 1);
        state.word = {
          id: words[state.index].id,
          word: words[state.index].word,
        };

        state.duplicate = !list.find((f) => f.id === state.word.id);
      } catch (err) {
        console.log(
          `%c state: ${state} => error: ${err}`,
          "background: #222; color: red"
        );
      }
      if (!state.duplicate)
        console.log(
          `%c Duplicated word '${state.word.word}' found and rejected`,
          "background: #222; color: #bada55"
        );
    } while (!state.duplicate);

    getMeaning(state.word).then((resp) => {
      resolve({ word: state.word, meanings: resp });
    });
  });

export const getAllWords = (level: number) =>
  new Promise<TWord[]>((resolve) => {
    let words: TWord[] = [];

    for (let i = 1; i <= level; i++) {
      axios.get<string>(`grade${i}.txt`).then((resp) => {
        resp.data
          .split("\n")
          .forEach((fe, inx) =>
            words.push({ id: String.fromCharCode(64 + i) + inx, word: fe })
          );
        resolve(words);
      });
    }
  });

export const getWordValue = (word: string) => {
  let val = 0;
  word.split("").forEach((fe) => {
    LETTER_VALUES.forEach((lfe) => {
      if (lfe.letters.split("").indexOf(fe) >= 0) {
        val += lfe.value;
      }
    });
  });
  return val + word.length;
};

export const caps = (word: string) => {
  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
};
