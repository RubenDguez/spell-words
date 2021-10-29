import axios from "axios";
import { TLetterValues } from "../Types";

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

export const getWord = () =>
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
