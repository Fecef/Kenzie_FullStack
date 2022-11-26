import { AccountProvider } from "./contexts/AccountContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <RoutesMain />
      </AccountProvider>
    </div>
  );
}

export default App;
