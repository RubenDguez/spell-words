import { Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import { GameButtons, GameHeader, GameTable } from ".";
import { StoreContext } from "../providers/StoreProvider";

export const Game = () => {
  const { store } = useContext(StoreContext);

  return (
    <>
      {!store.isStarted && (
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <GameHeader />
            </Grid>
            <Grid item xs={12}>
              <GameButtons />
            </Grid>
          </Grid>
        </Container>
      )}
      {store.isStarted && (
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <GameHeader />
              <GameButtons />
            </Grid>
            <Grid item xs={6}>
              {store.isStarted && <GameTable />}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};
