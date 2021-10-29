import { Button, Grid, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";

interface IGameButtons {
  isStarted: boolean;
  skippedWords: number;
  totalWords: number;
  wordsToPlay: number;
  startGame: (words: number) => void;
  restartGame: () => void;
  correct: () => void;
  incorrect: () => void;
  skip: () => void;
}

export const GameButtons = ({
  isStarted,
  skippedWords,
  totalWords,
  wordsToPlay,
  startGame,
  restartGame,
  correct,
  incorrect,
  skip,
}: IGameButtons) => {
  const classes = useStyles();
  const [wdsToPlay, setWdsToPlay] = useState(0);

  useEffect(() => {
    if (!isStarted) {
      setWdsToPlay(wordsToPlay);
    }
  }, [isStarted, wordsToPlay]);

  return (
    <Grid container spacing={1}>
      {!isStarted && (
        <>
          <Grid item xs={12}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <TextField
                size="small"
                variant="outlined"
                type="number"
                label="Max words to play"
                value={wdsToPlay}
                onChange={(e) => setWdsToPlay(Number(e.target.value))}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  style: { textAlign: "center" },
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => startGame(wdsToPlay)}
            >
              Start Game
            </Button>
          </Grid>
        </>
      )}
      {isStarted && (
        <>
          <Grid item xs={12}>
            <Button fullWidth onClick={restartGame}>
              restart game
            </Button>
          </Grid>
          {totalWords < wordsToPlay && (
            <>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={correct}
                  variant="contained"
                >
                  correct
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  color="secondary"
                  onClick={incorrect}
                  variant="contained"
                >
                  incorrect
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={!(skippedWords < 3)}
                  fullWidth
                  onClick={skip}
                  variant="contained"
                  className={classes.skipButton}
                >
                  skip word
                </Button>
              </Grid>
            </>
          )}
        </>
      )}
    </Grid>
  );
};
