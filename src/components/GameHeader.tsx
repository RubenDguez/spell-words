import { Container, Grid, Paper, Typography } from "@material-ui/core";
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
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            className={clsx(classes.word)}
          >
            {totalWords < wordsToPlay ? word.toUpperCase() : "Game Over"}
          </Typography>
        </Grid>
        {isStarted && (
          <Container maxWidth="sm">
            <Paper className={classes.container}>
              <Typography
                variant="body2"
                display="block"
                color="primary"
                className={clsx(classes.totalPoints)}
              >
                {`Total words played: ${totalWords}`}
              </Typography>
              <Typography
                variant="body2"
                display="block"
                color="primary"
                className={clsx(classes.totalPoints)}
              >
                {`Words to be played: ${wordsToPlay}`}
              </Typography>

              <Typography
                variant="body2"
                display="block"
                color="primary"
                className={clsx(classes.totalPoints)}
              >
                {`Remaining words: ${wordsToPlay - totalWords}`}
              </Typography>
              <Typography
                variant="body2"
                display="block"
                color="primary"
                className={clsx(classes.totalPoints)}
                style={{ marginTop: "1rem" }}
              >
                {totalWords < wordsToPlay
                  ? `This word plays for ${possiblePoints} points`
                  : `Your total points: ${totalPoints}`}
              </Typography>
            </Paper>
          </Container>
        )}
      </Grid>
    </>
  );
};
