import { Grid, IconButton, TextField, Tooltip } from "@material-ui/core";
import {
  CheckCircleOutlineSharp,
  HighlightOff,
  PlayCircleFilledWhiteOutlined,
  SkipNext,
  Stop,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

interface IGameButtons {
  isStarted: boolean;
  skippedWords: number;
  totalWords: number;
  wordsToPlay: number;
  minLevel: number;
  maxLevel: number;
  level: number;
  startGame: (words: number, level: number) => void;
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
  minLevel,
  maxLevel,
  level,
  startGame,
  restartGame,
  correct,
  incorrect,
  skip,
}: IGameButtons) => {
  const [wdsToPlay, setWdsToPlay] = useState(0);
  const [lvel, setLvel] = useState(0);

  useEffect(() => {
    if (!isStarted) {
      setWdsToPlay(wordsToPlay);
      setLvel(level);
    }
  }, [isStarted, wordsToPlay, level]);

  return (
    <Grid container spacing={1}>
      {!isStarted && (
        <>
          <Grid item xs={6}>
            <TextField
              fullWidth
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              type="number"
              label="Level"
              value={lvel}
              onChange={(e) =>
                setLvel(
                  Number(e.target.value) > 0 &&
                    Number(e.target.value) <= maxLevel
                    ? Number(e.target.value)
                    : Number(e.target.value) < minLevel
                    ? maxLevel
                    : minLevel
                )
              }
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                style: { textAlign: "center" },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Tooltip title="Start Game" arrow placement="bottom">
              <IconButton onClick={() => startGame(wdsToPlay, lvel)}>
                <PlayCircleFilledWhiteOutlined fontSize="large" />
              </IconButton>
            </Tooltip>
          </Grid>
        </>
      )}
      {isStarted && (
        <>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Tooltip title="Restart" arrow placement="bottom">
              <IconButton onClick={restartGame}>
                <Stop />
              </IconButton>
            </Tooltip>

            {totalWords < wordsToPlay && (
              <>
                <Tooltip title="Correct" arrow placement="bottom">
                  <IconButton onClick={correct} color="primary">
                    <CheckCircleOutlineSharp />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Incorrect" arrow placement="bottom">
                  <IconButton onClick={incorrect} color="secondary">
                    <HighlightOff />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Skip" arrow placement="bottom">
                  <IconButton disabled={!(skippedWords < 3)} onClick={skip}>
                    <SkipNext />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </Grid>
        </>
      )}
    </Grid>
  );
};
