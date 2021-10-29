import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./styles";

interface IGameHeader {
  word: string;
  isStarted: boolean;
  totalPoints: number;
  possiblePoints: number;
}

export const GameHeader = ({
  word,
  isStarted,
  totalPoints,
  possiblePoints,
}: IGameHeader) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary" className={clsx(classes.word)}>
          {word.toUpperCase()}
        </Typography>
        {isStarted && (
          <Typography
            variant="body2"
            display="block"
            color="primary"
            className={clsx(classes.totalPoints)}
          >
            {`This word plays for ${possiblePoints} points; Your total points are: ${totalPoints}`}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
