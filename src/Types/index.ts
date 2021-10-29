export type TRow = {
  word: string;
  outcome: boolean;
  points: number;
};

export type State = {
  isStarted: boolean;
  possiblePoints: number;
  tableData: TRow[];
  totalCorrect: number;
  totalIncorrect: number;
  totalPoints: number;
  word: string;
};

export type Action =
  | { type: "START GAME"; payload: { word: string } }
  | { type: "CORRECT"; payload: { word: string } }
  | { type: "INCORRECT"; payload: { word: string } };

export type TLetterValues = {
  letters: string;
  value: number;
};
