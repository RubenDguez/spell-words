import { Button, Grid } from "@material-ui/core";

interface IGameButtons {
  isStarted: boolean;
  startGame: () => void;
  correct: () => void;
  incorrect: () => void;
}

export const GameButtons = ({
  isStarted,
  startGame,
  correct,
  incorrect,
}: IGameButtons) => {
  return (
    <Grid container spacing={1}>
      {!isStarted && (
        <Grid item xs={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={startGame}
          >
            Start Game
          </Button>
        </Grid>
      )}
      {isStarted && (
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
        </>
      )}
    </Grid>
  );
};
