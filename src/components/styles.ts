import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  correct: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  incorrect: {
    backgroundColor: theme.palette.secondary.light,
    color: "white",
  },
  word: {
    border: `2px solid ${theme.palette.primary.main}`,
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "3rem",
    borderRadius: "6px",
    padding: "1rem",
  },
  totalPoints: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
