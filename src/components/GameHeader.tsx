import { Grid, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";
import { caps } from "../utils";
import { useContext } from "react";
import { StoreContext } from "../providers/StoreProvider";

export const GameHeader = () => {
  const { store } = useContext(StoreContext);
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
            {store.totalWords < store.wordsToPlay
              ? store.word.word.toUpperCase()
              : "Game Over"}
          </Typography>
        </Paper>
      </Grid>
      {store.isStarted && (
        <Paper className={classes.container}>
          {store.totalWords < store.wordsToPlay && (
            <div className={classes.subContainer}>
              <Typography
                variant="subtitle2"
                className={classes.subContainerTitle}
              >
                Meaning(s):
              </Typography>
              {store.meanings.map((m) => (
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
              {`Total words played: ${store.totalWords}`}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
            >
              {`Words to be played: ${store.wordsToPlay}`}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
            >
              {`Remaining words: ${store.wordsToPlay - store.totalWords}`}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              className={clsx(classes.totalPoints)}
              style={{ marginTop: "1rem" }}
            >
              {store.totalWords < store.wordsToPlay
                ? `This word plays for ${store.possiblePoints} points`
                : `Your total points: ${store.totalPoints}`}
            </Typography>
          </div>
        </Paper>
      )}
    </>
  );
};
