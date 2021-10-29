import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";

interface IGameHeader {
  word: string;
  wordsToPlay: number;
  isStarted: boolean;
  totalWords: number;
  totalPoints: number;
  possiblePoints: number;
}

export const GameHeader = ({
  word,
  wordsToPlay,
  isStarted,
  totalWords,
  totalPoints,
  possiblePoints,
}: IGameHeader) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary" className={clsx(classes.word)}>
          {totalWords < wordsToPlay ? word.toUpperCase() : "Game Over"}
        </Typography>
        {isStarted && (
          <>
            <Typography
              variant="body2"
              display="block"
              color="primary"
              className={clsx(classes.totalPoints)}
            >
              {`Total words played: ${totalWords}, words to be played in total: ${wordsToPlay}, remaining words: ${
                wordsToPlay - totalWords
              }`}
            </Typography>
            <Typography
              variant="body2"
              display="block"
              color="primary"
              className={clsx(classes.totalPoints)}
            >
              {totalWords < wordsToPlay
                ? `This word plays for ${possiblePoints} points; current total points: ${totalPoints}`
                : `Your total points: ${totalPoints}`}
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
};
