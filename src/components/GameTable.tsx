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
import { useContext } from "react";
import { StoreContext } from "../providers/StoreProvider";
import { caps } from "../utils";
import { useStyles } from "./styles";

export const GameTable = () => {
  const { store } = useContext(StoreContext);
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table stickyHeader>
        <TableHead style={{ backgroundColor: "lightgray" }}>
          <TableRow>
            <TableCell align="left">Word</TableCell>
            <TableCell align="center">Outcome</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: "lightgray" }}>
            <TableCell align="left">{`Total correct: ${store.totalCorrect}`}</TableCell>
            <TableCell align="center">{`Total incorrect: ${store.totalIncorrect}`}</TableCell>
            <TableCell align="right">{`Total points: ${store.totalPoints}`}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.tableData.map((row) => (
            <TableRow
              key={row.word.id}
              className={clsx(
                row.outcome === "CORRECT"
                  ? classes.correctRow
                  : row.outcome === "INCORRECT"
                  ? classes.incorrectRow
                  : classes.skippedRow
              )}
            >
              <TableCell align="left">{caps(row.word.word)}</TableCell>
              <TableCell align="center" style={{ fontSize: "1.5rem" }}>
                {row.outcome === "CORRECT"
                  ? "🥳 🥳 🥳 🥳"
                  : row.outcome === "INCORRECT"
                  ? "😡 😡 😡 😡"
                  : "😢 😢 😢 😢"}
              </TableCell>
              <TableCell align="right">{`${row.points}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
