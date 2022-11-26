import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CounterProvider } from "./contexts/counter";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
