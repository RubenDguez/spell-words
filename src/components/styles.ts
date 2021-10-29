import { makeStyles, Theme } from "@material-ui/core";
import { blue, red, yellow } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
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
  skipButton: {
    backgroundColor: yellow[200],
    color: red[400],
  },
  correctRow: {
    backgroundColor: blue[100],
  },
  incorrectRow: {
    backgroundColor: red[100],
  },
  skippedRow: {
    backgroundColor: yellow[100],
  },
}));
