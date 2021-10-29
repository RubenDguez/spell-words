import { Container, Grid } from "@material-ui/core";
import { GameButtons, GameHeader, GameTable } from ".";
import { useGame } from "../hooks";

export const Game = () => {
  const {
    word,
    totalPoints,
    totalCorrect,
    totalIncorrect,
    possiblePoints,
    isStarted,
    tableData,
    startGame,
    correct,
    incorrect,
  } = useGame();
  return (
    <>
      <Container maxWidth="md">
        <GameHeader
          word={word}
          isStarted={isStarted}
          totalPoints={totalPoints}
          possiblePoints={possiblePoints}
        />
      </Container>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GameButtons
              isStarted={isStarted}
              startGame={startGame}
              correct={correct}
              incorrect={incorrect}
            />
          </Grid>
          <Grid item xs={12}>
            <GameTable
              data={tableData}
              totalPoints={totalPoints}
              totalCorrect={totalCorrect}
              totalIncorrect={totalIncorrect}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
