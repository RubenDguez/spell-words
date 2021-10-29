import { Container, Grid } from "@material-ui/core";
import { GameButtons, GameHeader, GameTable } from ".";
import { useGame } from "../hooks";

export const Game = () => {
  const {
    word,
    wordsToPlay,
    totalPoints,
    totalCorrect,
    totalIncorrect,
    totalWords,
    possiblePoints,
    skipped,
    isStarted,
    tableData,
    startGame,
    restartGame,
    correct,
    incorrect,
    skip,
  } = useGame();
  return (
    <>
      <Container maxWidth="md">
        <GameHeader
          word={word}
          isStarted={isStarted}
          totalWords={totalWords}
          wordsToPlay={wordsToPlay}
          totalPoints={totalPoints}
          possiblePoints={possiblePoints}
        />
      </Container>
      <Container maxWidth="sm" style={{ marginTop: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GameButtons
              isStarted={isStarted}
              skippedWords={skipped}
              totalWords={totalWords}
              wordsToPlay={wordsToPlay}
              startGame={startGame}
              restartGame={restartGame}
              correct={correct}
              incorrect={incorrect}
              skip={skip}
            />
          </Grid>
          {isStarted && (
            <Grid item xs={12}>
              <GameTable
                data={tableData}
                totalPoints={totalPoints}
                totalCorrect={totalCorrect}
                totalIncorrect={totalIncorrect}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};
