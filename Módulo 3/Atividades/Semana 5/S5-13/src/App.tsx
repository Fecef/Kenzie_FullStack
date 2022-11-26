import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpinnerProvider } from "./contexts/SpinnerContext";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <SpinnerProvider>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </SpinnerProvider>
    </div>
  );
}

export default App;
