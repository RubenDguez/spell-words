import { Game } from "./components";
import { StoreProvider } from "./providers/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <Game />
    </StoreProvider>
  );
};

export default App;
