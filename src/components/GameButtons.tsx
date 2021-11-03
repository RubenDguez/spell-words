import { Grid, IconButton, TextField, Tooltip } from "@material-ui/core";
import {
  CheckCircleOutlineSharp,
  HighlightOff,
  PlayCircleFilledWhiteOutlined,
  SkipNext,
  Stop,
} from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../providers/StoreProvider";

export const GameButtons = () => {
  const { store, startGame, restartGame, correct, incorrect, skip } =
    useContext(StoreContext);

  const [wdsToPlay, setWdsToPlay] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (!store.isStarted) {
      setWdsToPlay(store.wordsToPlay);
      setLevel(store.level);
    }
  }, [store]);

  return (
    <Grid container spacing={1}>
      {!store.isStarted && (
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
              value={level}
              onChange={(e) =>
                setLevel(
                  Number(e.target.value) > 0 &&
                    Number(e.target.value) <= store.maxLevel
                    ? Number(e.target.value)
                    : Number(e.target.value) < store.minLevel
                    ? store.maxLevel
                    : store.minLevel
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
              <IconButton onClick={() => startGame(wdsToPlay, level)}>
                <PlayCircleFilledWhiteOutlined fontSize="large" />
              </IconButton>
            </Tooltip>
          </Grid>
        </>
      )}
      {store.isStarted && (
        <>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Tooltip title="Restart" arrow placement="bottom">
              <IconButton onClick={restartGame}>
                <Stop />
              </IconButton>
            </Tooltip>

            {store.totalWords < store.wordsToPlay && (
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
                  <IconButton disabled={!(store.skipped < 3)} onClick={skip}>
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
