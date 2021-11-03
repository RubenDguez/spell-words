import { Container, Grid, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";
import { caps } from "../utils";

interface IGameHeader {
  word: string;
  meanings: string[];
  wordsToPlay: number;
  isStarted: boolean;
  totalWords: number;
  totalPoints: number;
  possiblePoints: number;
}

export const GameHeader = ({
  word,
  meanings,
  wordsToPlay,
  isStarted,
  totalWords,
  totalPoints,
  possiblePoints,
}: IGameHeader) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Paper>
          <Typography
            variant="h3"
            color="primary"
            className={clsx(classes.word)}
          >
            {totalWords < wordsToPlay ? word.toUpperCase() : "Game Over"}
          </Typography>
        </Paper>
      </Grid>
      {isStarted && (
        <Paper className={classes.container}>
          {totalWords < wordsToPlay && (
            <div className={classes.subContainer}>
              <Typography
                variant="subtitle2"
                className={classes.subContainerTitle}
              >
                Meaning(s):
              </Typography>
              {meanings.map((m) => (
                <Typography key={m} variant="caption" display="block">
                  {caps(m)}
                </Typography>
              ))}
            </div>
          )}
          <div className={classes.subContainer}>
            <Typography variant="subtitle2" style={{ marginBottom: 4 }}>
              Points:
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
            >
              {`Total words played: ${totalWords}`}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
            >
              {`Words to be played: ${wordsToPlay}`}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
            >
              {`Remaining words: ${wordsToPlay - totalWords}`}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
              style={{ marginTop: "1rem" }}
            >
              {totalWords < wordsToPlay
                ? `This word plays for ${possiblePoints} points`
                : `Your total points: ${totalPoints}`}
            </Typography>
          </div>
        </Paper>
      )}
    </>
  );
};
