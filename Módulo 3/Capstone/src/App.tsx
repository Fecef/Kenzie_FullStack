import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeckProvider } from "./contexts/DeckContext";
import { CardProvider } from "./contexts/CardContext";

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} />

      <UserProvider>
        <DeckProvider>
          <CardProvider>
            <RoutesMain />
          </CardProvider>
        </DeckProvider>
      </UserProvider>
    </div>
  );
}

export default App;
