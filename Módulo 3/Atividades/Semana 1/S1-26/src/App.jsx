import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { RestrictedPage } from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Login = () => setIsLoggedIn(true);
  const Logout = () => setIsLoggedIn(false);
  const user = "Felipe";

  return (
    <div className="App">
      <RestrictedPage
        isLoggedIn={isLoggedIn}
        user={user}
        Login={Login}
        Logout={Logout}
      />
    </div>
  );
}

export default App;
