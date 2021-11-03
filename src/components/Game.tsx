import { Container, Grid } from "@material-ui/core";
import { GameButtons, GameHeader, GameTable } from ".";
import { useGame } from "../hooks";

export const Game = () => {
  const {
    word,
    meanings,
    wordsToPlay,
    totalPoints,
    totalCorrect,
    totalIncorrect,
    totalWords,
    possiblePoints,
    skipped,
    isStarted,
    tableData,
    level,
    minLevel,
    maxLevel,
    startGame,
    restartGame,
    correct,
    incorrect,
    skip,
  } = useGame();

  return (
    <>
      {!isStarted && (
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <GameHeader
                word={word.word}
                meanings={meanings}
                isStarted={isStarted}
                totalWords={totalWords}
                wordsToPlay={wordsToPlay}
                totalPoints={totalPoints}
                possiblePoints={possiblePoints}
              />
            </Grid>
            <Grid item xs={12}>
              <GameButtons
                level={level}
                isStarted={isStarted}
                skippedWords={skipped}
                totalWords={totalWords}
                wordsToPlay={wordsToPlay}
                minLevel={minLevel}
                maxLevel={maxLevel}
                startGame={startGame}
                restartGame={restartGame}
                correct={correct}
                incorrect={incorrect}
                skip={skip}
              />
            </Grid>
          </Grid>
        </Container>
      )}
      {isStarted && (
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <GameHeader
                word={word.word}
                meanings={meanings}
                isStarted={isStarted}
                totalWords={totalWords}
                wordsToPlay={wordsToPlay}
                totalPoints={totalPoints}
                possiblePoints={possiblePoints}
              />
              <GameButtons
                level={level}
                isStarted={isStarted}
                skippedWords={skipped}
                totalWords={totalWords}
                wordsToPlay={wordsToPlay}
                minLevel={minLevel}
                maxLevel={maxLevel}
                startGame={startGame}
                restartGame={restartGame}
                correct={correct}
                incorrect={incorrect}
                skip={skip}
              />
            </Grid>
            <Grid item xs={6}>
              {isStarted && (
                <GameTable
                  data={tableData}
                  totalPoints={totalPoints}
                  totalCorrect={totalCorrect}
                  totalIncorrect={totalIncorrect}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};
