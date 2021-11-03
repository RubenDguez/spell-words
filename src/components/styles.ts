import { makeStyles, Theme } from "@material-ui/core";
import { red, yellow, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  word: {
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "3rem",
    borderRadius: "6px",
    padding: "1rem",
  },
  container: {
    padding: "2rem",
  },
  subContainer: {
    marginBottom: 8,
    borderBottom: "2px solid grey",
    color: "grey",
  },
  subContainerTitle: {
    marginBottom: 4,
  },
  totalPoints: {
    textAlign: "left",
    color: grey[600],
  },
  skipButton: {
    backgroundColor: yellow[200],
    color: red[400],
  },
  correctRow: {
    backgroundColor: "white",
  },
  incorrectRow: {
    backgroundColor: red[100],
  },
  skippedRow: {
    backgroundColor: yellow[100],
  },
}));
