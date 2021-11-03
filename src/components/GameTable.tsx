import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import clsx from "clsx";
import { TRow } from "../Types";
import { caps } from "../utils";
import { useStyles } from "./styles";

interface IGameTable {
  data: TRow[];
  totalPoints: number;
  totalCorrect: number;
  totalIncorrect: number;
}

export const GameTable = ({
  data,
  totalPoints,
  totalCorrect,
  totalIncorrect,
}: IGameTable) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={{ backgroundColor: "lightgray" }}>
          <TableRow>
            <TableCell align="left">Word</TableCell>
            <TableCell align="center">Outcome</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.word}
              className={clsx(
                row.outcome === "CORRECT"
                  ? classes.correctRow
                  : row.outcome === "INCORRECT"
                  ? classes.incorrectRow
                  : classes.skippedRow
              )}
            >
              <TableCell align="left">{caps(row.word)}</TableCell>
              <TableCell align="center">
                {row.outcome === "CORRECT"
                  ? "🥳 🥳 🥳 🥳"
                  : row.outcome === "INCORRECT"
                  ? "😡 😡 😡 😡"
                  : "😢 😢 😢 😢"}
              </TableCell>
              <TableCell align="right">{`${row.points}`}</TableCell>
            </TableRow>
          ))}
          <TableRow style={{ backgroundColor: "lightgray" }}>
            <TableCell align="left">{`Total correct: ${totalCorrect}`}</TableCell>
            <TableCell align="center">{`Total incorrect: ${totalIncorrect}`}</TableCell>
            <TableCell align="right">{`Total points: ${totalPoints}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
