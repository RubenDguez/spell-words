import axios from "axios";
import { TResponse, TLetterValues, TWordResponse } from "../Types";

const URL = `https://www.dictionaryapi.com/api/v3/references/sd2/json/`;
const API_KEY = "?key=ed0eea47-a413-4c71-94f0-fb792e91dcdd";

const LETTER_VALUES: TLetterValues[] = [
  { letters: "aeilnorstu", value: 1 },
  { letters: "dg", value: 2 },
  { letters: "bcmp", value: 3 },
  { letters: "fhvwy", value: 4 },
  { letters: "k", value: 5 },
  { letters: "jx", value: 8 },
  { letters: "qz", value: 10 },
];

export const getMeaning = (word: string) =>
  new Promise<TResponse>((resolve, reject) => {
    let ret: TResponse;
    axios
      .get<TResponse[]>(`${URL}${word}${API_KEY}`)
      .then((resp) => {
        if (resp.data) {
          resp.data.forEach((fe) => {
            ret = { ...ret, shortdef: fe.shortdef };
          });
          resolve(ret);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getWord = () =>
  new Promise<TWordResponse>((resolve, reject) => {
    axios
      .get("words.txt")
      .then((resp) => {
        const words = resp.data.split("\n");
        const index = Math.floor(Math.random() * words.length - 1);
        const word = `${words[index]}`;
        getMeaning(word).then((resp) => {
          resolve({ word, meanings: resp });
        });
      })
      .catch((err) => {
        reject(`${err}`);
      });
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
